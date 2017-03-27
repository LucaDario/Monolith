
import {ListWidgetView} from './ListWidgetView'
import {ListWidget} from './ListWidget'

describe('ListWidgetView', function () {
    it('Check that is not instantiable', function () {
        // This code will be executed by the test driver when the app is started
        // in the correct mode
        expect(
            () => {
                new ListWidgetView();
            }
        ).to.throw();
    });

});

describe('ListWidget', function () {
    it('Check that is instantiable', function () {
        // This code will be executed by the test driver when the app is started
        // in the correct mode
        expect(
            () => {
                new ListWidget();
            }
        ).to.not.throw();
    });

});
