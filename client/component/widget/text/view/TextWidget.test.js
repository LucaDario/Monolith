
import {TextWidget} from './TextWidget'

describe('TextWidget', function () {
    it('Check that is instantiable', function () {
        // This code will be executed by the test driver when the app is started
        // in the correct mode
        expect(
            () => {
                new TextWidget();
            }
        ).to.not.throw();
    });

});
