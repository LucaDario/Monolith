
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

    it("Check that can't add itself", function () {
        // This code will be executed by the test driver when the app is started
        // in the correct mode
		const layout = new VerticalLayoutView();
        expect(
            () => {
                layout.addItem(layout);
            }
        ).to.throw();
    });

    it("Check items adding", function () {
        // This code will be executed by the test driver when the app is started
        // in the correct mode
        const layout = new VerticalLayoutView();
        layout.addItem(new VerticalLayoutView());
        layout.addItem(new VerticalLayoutView());
        expect(layout.getItems().length).to.be.eq(2);
    });

    it("Check items rendering", function () {
        // This code will be executed by the test driver when the app is started
        // in the correct mode
        const layout = new VerticalLayoutView();
        layout.addItem(new VerticalLayoutView());
        layout.addItem(new VerticalLayoutView());
        expect(layout.renderView().childNodes.length).to.be.eq(2);
    });

});
