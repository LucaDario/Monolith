/**
 * Created by Stefano Lia on 27/04/2017
 * Version 1.0.2 - Completed
 */


import {ListWidget} from '../view/ListWidget'
import {ListWidgetPresenter} from './ListWidgetPresenter'

describe('ListWidgetPresenter', function () {
    it('Check that is instantiable', function () {
        // This code will be executed by the test driver when the app is started
        // in the correct mode
        expect(
            () => {
                new ListWidgetPresenter(new ListWidget()); //NOSONAR
            }
        ).to.not.throw();
    });
    it("Check items adding", function () {
        // This code will be executed by the test driver when the app is started
        // in the correct mode
        const list = new ListWidget();
        list._presenter.addItem("test1");
        list._presenter.addItem("test2");
        list._presenter.addItem("test3");
        list._presenter.addItem("test4");
        expect((list._presenter.getOptions()).length).to.be.eq(4);
    });

    it("Check if the style is made by Numbers", function () {
        // This code will be executed by the test driver when the app is started
        // in the correct mode
        const list = new ListWidget();
        list._presenter.addItem("test1");
        list._presenter.addItem("test2");
        list._presenter.addItem("test3");
        list._presenter.addItem("test4");
        list._presenter.setCharacterNumber();
        const dom = list._presenter.renderView();
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
        list._presenter.addItem("test1");
        list._presenter.addItem("test2");
        list._presenter.addItem("test3");
        list._presenter.addItem("test4");
        list._presenter.setCharacterCircle();
        const dom = list._presenter.renderView();
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
        list._presenter.addItem("test1");
        list._presenter.addItem("test2");
        list._presenter.addItem("test3");
        list._presenter.addItem("test4");
        list._presenter.setCharacterDash();
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
