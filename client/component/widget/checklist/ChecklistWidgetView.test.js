
import {ChecklistWidgetView} from './ChecklistWidgetView'

describe('ChecklistWidgetView', function () {
    it('Check that is not instantiable', function () {
        // This code will be executed by the test driver when the app is started
        // in the correct mode
        expect(
            () => {
                new ChecklistWidgetView();
            }
        ).to.throw();
    });

});
