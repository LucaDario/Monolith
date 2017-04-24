
import {ListWidget} from './ListWidget'

describe('ListWidget', function () {
    it('Check that is instantiable', function () {
        // This code will be executed by the test driver when the app is started
        // in the correct mode
        expect(
            () => {
                new ListWidget(); //NOSONAR
            }
        ).to.not.throw();
    });
    it("Check items adding", function () {
        // This code will be executed by the test driver when the app is started
        // in the correct mode
        const list = new ListWidget();
        list.addItem("test1");
        list.addItem("test2");
        list.addItem("test3");
        list.addItem("test4");
        expect((list.getOptions()).length).to.be.eq(4);
    });

    it("Check if the style is made by Numbers", function () {
        // This code will be executed by the test driver when the app is started
        // in the correct mode
        const list = new ListWidget();
        list.addItem("test1");
        list.addItem("test2");
        list.addItem("test3");
        list.addItem("test4");
        list.setCharacterNumber();
        const dom = list.renderView();
        let cond = false;
        const text = dom.firstChild.textContent;
        for(let i=0; i<text.length && !cond; i++){
            if(text[i] === 1){
                cond = true;
            }
        }
        expect(cond).to.be.eq(true);
    });
    it("Check if the style is made by Circles", function () {
        // This code will be executed by the test driver when the app is started
        // in the correct mode
        const list = new ListWidget();
        list.addItem("test1");
        list.addItem("test2");
        list.addItem("test3");
        list.addItem("test4");
        list.setCharacterCircle();
        const dom = list.renderView();
        let cond = false;
        const text = dom.firstChild.textContent;
        for(let i=0; i<text.length && !cond; i++){
            if(text[i] === "•"){
                cond = true;
            }
        }
        expect(cond).to.be.eq(true);
    });
    it("Check if the style is made by Dashes", function () {
        // This code will be executed by the test driver when the app is started
        // in the correct mode
        const list = new ListWidget();
        list.addItem("test1");
        list.addItem("test2");
        list.addItem("test3");
        list.addItem("test4");
        list.setCharacterDash();
        const dom = list.renderView();
        let cond = false;
        const text = dom.firstChild.textContent;
        for(let i=0; i<text.length && !cond; i++){
            if(text[i] === "–"){
                cond = true;
            }
        }
        expect(cond).to.be.eq(true);
    });

    it("Check the change of the color", function () {
        // This code will be executed by the test driver when the app is started
        // in the correct mode
        const list = new ListWidget();
        list.addItem("test1");
        list.addItem("test2");
        list.addItem("test3");
        list.addItem("test4");
        const dom = list.renderView();
        list.setColor("#0f0");
        //take the dd element
        const dl = dom.firstChild;
        //take the span element
        const dd = dl.firstChild;
        expect(dd.firstChild.style.color).to.be.eq('rgb(0, 0, 0)');
    });


});
