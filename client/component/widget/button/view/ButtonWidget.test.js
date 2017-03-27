
import {ButtonWidget} from './ButtonWidget'

describe('ButtonWidget', function () {
    it('Check that is instantiable', function () {
        // This code will be executed by the test driver when the app is started
        // in the correct mode
        expect(
            () => {
                new ButtonWidget();
            }
        ).to.not.throw();
    });

});
