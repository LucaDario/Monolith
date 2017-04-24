
import {BaseWidget} from './BaseWidget.js'


describe('BaseWidget', function () {
	it('Check that is not instantiable', function () {
		// This code will be executed by the test driver when the app is started
		// in the correct mode
		expect(() => {
            new BaseWidget(); //NOSONAR
		}).to.throw();
	});

});
