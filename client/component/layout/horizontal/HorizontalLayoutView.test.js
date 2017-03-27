
import {HorizontalLayoutView} from './HorizontalLayoutView'

describe('HorizontalLayoutView', function () {
	it('Check that is instantiable', function () {
		// This code will be executed by the test driver when the app is started
		// in the correct mode
		expect(
			() => {
				new HorizontalLayoutView();
			}
			).to.not.throw();
	});

});
