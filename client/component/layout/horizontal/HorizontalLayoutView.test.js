/**
 * Created by Manuel Turetta on 21/03/2017.
 * Version 1.0.0 - Completed
 * Unit test for HorizontalLayout
 */
import {HorizontalLayoutView} from './HorizontalLayoutView'

describe('HorizontalLayoutView', function () {
	it('Check that is instantiable', function () {
		// This code will be executed by the test driver when the app is started
		// in the correct mode
		expect(
			() => {
				new HorizontalLayoutView(); //NOSONAR
			}
			).to.not.throw();
	});

    it("Check items adding [TU40]", function () {
        // This code will be executed by the test driver when the app is started
        // in the correct mode
        const layout = new HorizontalLayoutView();
        layout.addItem(new HorizontalLayoutView());
        layout.addItem(new HorizontalLayoutView());
        expect(layout.getItems().length).to.be.eq(2);
    });

    it("Check that can't add itself [TU41]", function () {
        // This code will be executed by the test driver when the app is started
        // in the correct mode
        const layout = new HorizontalLayoutView();
        expect(
            () => {
                layout.addItem(layout);
            }
        ).to.throw();
    });

    it("Check items rendering", function () {
        // This code will be executed by the test driver when the app is started
        // in the correct mode
        const layout = new HorizontalLayoutView();
        layout.addItem(new HorizontalLayoutView());
        layout.addItem(new HorizontalLayoutView());
        const nodes = layout.renderView().childNodes;
        let column = 0;
        for(let i = 0; i < nodes.length; ++i){
            if(nodes[i].className === 'hl-column'){
                column++
            }
        }
        expect(column).to.be.eq(2);
    });

});
