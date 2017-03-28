
import {ListWidget} from './ListWidget'

describe('ListWidget', function () {
    it('Check that is instantiable', function () {
        // This code will be executed by the test driver when the app is started
        // in the correct mode
        expect(
            () => {
                new ListWidget();
            }
        ).to.not.throw();
    });
    it("Check items adding", function () {
        // This code will be executed by the test driver when the app is started
        // in the correct mode
        let list = new ListWidget();
        list.addItem("test1");
        list.addItem("test2");
        list.addItem("test3");
        list.addItem("test4");
        expect((list.getOptions()).length).to.be.eq(4);
    });

    it("Check the style of a List", function () {
        // This code will be executed by the test driver when the app is started
        // in the correct mode
        let list = new ListWidget();
        list.setCharacterNumber();
        expect(list.getCharacter()).to.be.eq('decimal');
        list.setCharacterPoint();
        expect(list.getCharacter()).to.be.eq("&#8226;");
        list.setCharacterSign();
        expect(list.getCharacter()).to.be.eq("&ndash;");
        list.setColor("#0000FF");
        expect(list.getColor()).to.be.eq("#0000FF");
    });

});
