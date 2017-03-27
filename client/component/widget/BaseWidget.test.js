
import {BaseWidget} from './BaseWidget.js'

// TODO: The package that handles the test is not added anywhere.
// TODO: this should be re-implemented once the proper module has been imported
describe('BaseWidget', function () {
	it('Check that is not instantiable', function () {
		// This code will be executed by the test driver when the app is started
		// in the correct mode
		expect(() => {
            new BaseWidget();
		}).to.throw();
	});

});
