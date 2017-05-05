/**
 * Created by Manuel Turetta on 26/03/2017.
 * Version 1.0.0 - Completed
 * Unit tests for BaseWidget
 */
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
