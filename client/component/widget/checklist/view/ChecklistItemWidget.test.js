
import {ChecklistItemWidget} from './ChecklistItemWidget'
describe('ChecklistItemWidget', function () {
    it('Check that is instantiable', function () {
        // This code will be executed by the test driver when the app is started
        // in the correct mode
        expect(
            () => {
                new ChecklistItemWidget('test'); //NOSONAR
            }
        ).to.not.throw();
    });
});
