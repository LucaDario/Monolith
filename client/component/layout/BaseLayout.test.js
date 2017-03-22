/**
 * Base abstract class which represents a generic component that will be used inside a bubble.
 * Created by Riccardo Montagnin on 21/03/2017.
 */

import {BaseLayout} from './BaseLayout.js'

describe('BaseLayout', function () {
	it('Check that is not instantiable', function () {
		// This code will be executed by the test driver when the app is started
		// in the correct mode
		expect(
			() => {
				new BaseLayout();
			}
			).to.throw();
	});

});
