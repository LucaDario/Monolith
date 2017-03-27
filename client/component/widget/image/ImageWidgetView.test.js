
import {ImageWidgetView} from './ImageWidgetView'


describe('ImageWidgetView', function () {
    it('Check that is not instantiable', function () {
        // This code will be executed by the test driver when the app is started
        // in the correct mode
        expect(
            () => {
                new ImageWidgetView();
            }
        ).to.throw();
    });

});
