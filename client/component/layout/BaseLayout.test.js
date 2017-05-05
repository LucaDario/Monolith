/**
 * Created by Manuel Turetta on 21/03/2017.
 * Version 1.0.0 - Completed
 * Unit test for BaseLayout
 */

import {BaseLayout} from './BaseLayout.js'

describe('BaseLayout', function () {
	it('Check that is not instantiable', function () {
		// This code will be executed by the test driver when the app is started
		// in the correct mode
		expect(() => {
		    new BaseLayout(); //NOSONAR
		}).to.throw();
	});

});
