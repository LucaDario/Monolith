
import {MarkdownBubble} from './MarkdownBubble'

describe('MarkdownBubble', function () {
    it('Check that is instantiable', function () {
        // This code will be executed by the test driver when the app is started
        // in the correct mode
        expect(
            () => {
                new MarkdownBubble('test'); //NOSONAR
            }
        ).to.not.throw();
    });

});
