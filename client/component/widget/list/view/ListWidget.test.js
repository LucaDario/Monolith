
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

    it("Check if the style is made by Numbers", function () {
        // This code will be executed by the test driver when the app is started
        // in the correct mode
        let list = new ListWidget();
        list.addItem("test1");
        list.addItem("test2");
        list.addItem("test3");
        list.addItem("test4");
        list.setCharacterNumber();
        let dom = list.renderView();
        let cond = false;
        let text = dom.firstChild.textContent;
        for(let i=0; i<text.length && !cond; i++){
            if(text[i] == 1){
                cond = true;
            }
        }
        expect(cond).to.be.eq(true);
        //list.setColor("#0000FF");
       // dom2 = list.renderView();
        //expect(dom2.firstChild.style.color).to.be.eq('1em');
        //expect(list.getColor()).to.be.eq("#0000FF");
        //expect(domNode.getElementsByTagName('p')[0].style.fontSize).to.be.eq('1em');
    });
    it("Check if the style is made by Circles", function () {
        // This code will be executed by the test driver when the app is started
        // in the correct mode
        let list = new ListWidget();
        list.addItem("test1");
        list.addItem("test2");
        list.addItem("test3");
        list.addItem("test4");
        list.setCharacterCircle();
        let dom = list.renderView();
        let cond = false;
        let text = dom.firstChild.textContent;
        for(let i=0; i<text.length && !cond; i++){
            if(text[i] == "•"){
                cond = true;
            }
        }
        expect(cond).to.be.eq(true);
    });
    it("Check if the style is made by Dashes", function () {
        // This code will be executed by the test driver when the app is started
        // in the correct mode
        let list = new ListWidget();
        list.addItem("test1");
        list.addItem("test2");
        list.addItem("test3");
        list.addItem("test4");
        list.setCharacterDash();
        let dom = list.renderView();
        let cond = false;
        let text = dom.firstChild.textContent;
        for(let i=0; i<text.length && !cond; i++){
            if(text[i] == "–"){
                cond = true;
            }
        }
        expect(cond).to.be.eq(true);
    });

    it("Check the change of the color", function () {
        // This code will be executed by the test driver when the app is started
        // in the correct mode
        let list = new ListWidget();
        list.addItem("test1");
        list.addItem("test2");
        list.addItem("test3");
        list.addItem("test4");
        let dom = list.renderView();
        list.setColor("#0000FF");
        //take the dd element
        let dl = dom.firstChild;
        //take the span element
        let dd = dl.firstChild;
        console.log(dd.firstChild);
        expect(dd.firstChild.style.color).to.be.eq('#0000FF');
    });


});
