
import {ButtonWidgetView} from './ButtonWidgetView'
import {ButtonWidget} from './ButtonWidget'

describe('ButtonWidgetView', function () {
	it('Check that is not instantiable', function () {
		// This code will be executed by the test driver when the app is started
		// in the correct mode
		expect(
			() => {
				new ButtonWidgetView();
			}
			).to.throw();
	});

});

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
