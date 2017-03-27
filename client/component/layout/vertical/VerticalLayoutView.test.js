
import {VerticalLayoutView} from './VerticalLayoutView'

describe('VerticalLayoutView', function () {
	it('Check that is instantiable', function () {
		// This code will be executed by the test driver when the app is started
		// in the correct mode
		expect(
			() => {
				new VerticalLayoutView();
			}
			).to.not.throw();
	});

});
