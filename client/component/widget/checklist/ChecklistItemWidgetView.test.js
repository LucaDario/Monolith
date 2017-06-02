/**
 * Created by Francesco Bazzerla on 21/03/2017.
 * Version 1.0.0 - Completed
 * Unit tests for ChecklistItemWidgetView
 */
import {ChecklistItemWidgetView} from './ChecklistItemWidgetView'

describe('ChecklistItemWidgetView', function () {
    it('Check that is not instantiable', function () {
        // This code will be executed by the test driver when the app is started
        // in the correct mode
        expect(
            () => {
                new ChecklistItemWidgetView('test'); //NOSONAR
            }
        ).to.throw();
    });

});
