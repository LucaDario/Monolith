
import {TextWidgetView} from './TextWidgetView'
import {TextWidget} from './TextWidget'

describe('TextWidgetView', function () {
    it('Check that is not instantiable', function () {
        // This code will be executed by the test driver when the app is started
        // in the correct mode
        expect(
            () => {
                new TextWidgetView();
            }
        ).to.throw();
    });

});


describe('TextWidget', function () {
    it('Check that is instantiable', function () {
        // This code will be executed by the test driver when the app is started
        // in the correct mode
        expect(
            () => {
                new TextWidget();
            }
        ).to.throw();
    });

});
