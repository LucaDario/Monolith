
import {ToDoListBubble} from './ToDoListBubble'

describe('ToDoListBubble', function () {
    it('Check that is instantiable', function () {
        // This code will be executed by the test driver when the app is started
        // in the correct mode
        expect(
            () => {
                new ToDoListBubble(); //NOSONAR
            }
        ).to.not.throw();
    });

});
