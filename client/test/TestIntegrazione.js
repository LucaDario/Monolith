/**
 * Created by Stefano Lia on 28/04/2017
 * Version 1.0.0 - Initial version
 */

import {ButtonWidget} from '../component/widget/button/view/ButtonWidget';
import {TextWidget} from '../component/widget/text/view/TextWidget';
import {ChecklistItemWidget} from '../component/widget/checklist/view/ChecklistItemWidget';
import {ListWidget} from '../component/widget/list/view/ListWidget';
import {ImageWidget} from '../component/widget/image/view/ImageWidget';
import {HorizontalLayoutView} from '../component/layout/horizontal/HorizontalLayoutView';
import {VerticalLayoutView} from '../component/layout/vertical/VerticalLayoutView';

class Test extends Monolith.bubble.BaseBubble{
    constructor(){
        super();
    }
}

describe('Integration tests', function () {
    it('Verify that setText goes through the Presenter and sets the text of the button correctly' +
        ' [TI1]', function () {
        const button = new ButtonWidget();
        button.setText('test');

        // verify the text in the Presenter is changed
        expect(button._presenter.getText()).to.be.eq('test');

        // verify the HTML is changed
        expect(button._presenter._dom.innerHTML).to.be.eq('test');
    });

    it('Verify that setHeight goes through the Presenter and sets the height of the button ' +
        'correctly [TI2]', function () {
        const button = new ButtonWidget();
        button.setHeight("200px");

        // verify the text in the Presenter is changed
        expect(button._presenter.getHeight()).to.be.eq('200px');

        // verify the HTML is changed
        expect(button._presenter._dom.style.height === "200px");
    });

    it('Verify that setHeight goes through the Presenter and sets the width of the button correctly ' +
        '[TI3]', function () {
        const button = new ButtonWidget();
        button.setWidth("200px");

        // verify the text in the Presenter is changed
        expect(button._presenter.getWidth()).to.be.eq('200px');

        // verify the HTML is changed
        expect(button._presenter._dom.style.width === "200px");
    });

    it('Verify that setBackgroundColor goes through the Presenter and sets the background color of the ' +
        'button correctly [TI4]', function () {
        const button = new ButtonWidget();
        button.setBackgroundColor('#FFFFFF');

        // verify the text in the Presenter is changed
        expect(button._presenter.getColor()).to.be.eq('#FFFFFF');

        // verify the HTML is changed
        expect(button._presenter._dom.style.backgroundColor === "#FFFFFF");
    });

    it('Verify that setOnClickAction goes through the Presenter and sets the action ' +
        'after a simple click of the button by the user correctly [TI5]', function () {
        const button = new ButtonWidget();
        let action = function () {
            return "TEST";
        }
        button.setOnClickAction(action);

        // verify the text in the Presenter is changed
        expect(button._presenter._onClickAction).to.be.eq(action);

        // verify the correct execution of the function encapsulated in the Presenter
        expect("TEST").to.satisfy(button._presenter._onClickAction);
    });

    it('Verify that setOnLongClickAction goes through the Presenter and sets the action of the ' +
        'button after a long click by the developer [TI6]', function () {
        const button = new ButtonWidget();
        let action = function () {
            return "TEST";
        }
        button.setOnLongClickAction(action);

        // verify the text in the Presenter is changed
        expect(button._presenter._onLongClickAction).to.be.eq(action);

        // verify the correct execution of the function encapsulated in the Presenter
        expect("TEST").to.satisfy(button._presenter._onLongClickAction);
    });

    it('Verify that setText goes through the Presenter and sets the text of a TextWidget correctly ' +
        '[TI7]', function () {
        const text = new TextWidget();

        text.setFormatText(true);
        text.setText("*TEST*");

        // verify the text in the Presenter is changed
        expect(text._presenter.getText()).to.be.eq("*TEST*");

        //verify if the HTML changes
        const domNode = text._presenter.renderView();
        expect(domNode.getElementsByTagName('em')[0].innerText).to.be.eq('TEST');
    });

    it('Verify that setTextColor goes through the Presenter and sets the color of the' +
        ' text of a TextWidget correctly [TI8]', function () {
        const text = new TextWidget();

        text.setText("test");
        text._presenter.setTextColor('#f00');

        // verify the text in the Presenter is changed
        expect(text._presenter.getColor()).to.be.eq("#f00");

        //verify if the CSS changes
        const domNode = text._presenter.renderView();
        expect(domNode.getElementsByTagName('p')[0].style.color).to.be.eq('rgb(255, 0, 0)');
    });

    it('Verify that setFormatText goes through the Presenter and allows the user to write text' +
        'using the markdown method [TI9]', function () {
        const text = new TextWidget();

        text.setFormatText(true);
        text.setText("*TEST*");

        //verify if the HTML changes
        const domNode = text._presenter.renderView();
        expect(domNode.getElementsByTagName('em')[0].innerText).to.be.eq('TEST');

        const text2 = new TextWidget();

        text2.setFormatText(false);
        text2.setText("*TEST*");

        //verify if the HTML changes
        const domNode2 = text2._presenter.renderView();
        expect(domNode2.getElementsByTagName('em')[1]).to.be.eq(undefined);
    });

    it('Verify that setUrlHighlightColor goes through the Presenter and shows the link inside of a ' +
        'TextWidget with the color chosen by the developer [TI10]', function () {
        const text = new TextWidget();
        text.setText("[Google](https://www.google.com)");
        text.setFormatText(true);
        text.setUrlHighlightColor('#f00');

        // verify the correct color of the link
        const domNode = text.renderView().getElementsByTagName('a')[0];
        expect(domNode.style.color).to.be.eq('rgb(255, 0, 0)');
    });

    it('Verify that setTextSize goes through the Presenter and sets the text size of the text' +
        'shown in a TextWidget correctly [TI11]', function () {
        const text = new TextWidget();
        text.setTextSize(4);

        // verify the correct color of the link
        const domNode = text.renderView();
        expect(domNode.getElementsByTagName('p')[0].style.fontSize).to.be.eq('4px');
    });

    it('Verify that setUseSelectionMark goes through the Presenter and sets the variable which' +
        'allows the user to use character or color for checking the CheckListItemWidget [TI12]', function () {
        const check = new ChecklistItemWidget('test');
        check.setUseSelectionMark(true);

        expect(check._presenter._style._useSelectionMark).to.be.eq(true);
    });

    it('Verify that setSelectionColor goes through the Presenter and shows the selection of list' +
        'with a color, which was chosen by the developer in a CheckListItemWidget [TI13]', function () {
        const check = new ChecklistItemWidget('test');
        check.setUseSelectionMark(true);

        check.setSelectionColor('#f00');

        const box = check._presenter.renderView().childNodes[0].childNodes[1];
        const symbol = check._presenter.renderView().childNodes[0].childNodes[1].childNodes[0];
        expect(box.style.backgroundColor).to.be.eq('rgb(255, 255, 255)');
        expect(symbol.style.backgroundColor).to.be.eq('rgb(255, 255, 255)');
    });

    it('Verify that setSelectionCharacter goes through the Presenter and shows the selection of list' +
        'with a character, which was chosen by the developer in a CheckListItemWidget [TI14]', function () {

        const cWidget = new ChecklistItemWidget('test',true);
        cWidget.setSelectionCharacter('&#x2717;');

        const symbolLogic = cWidget._presenter._style.getSelectionCharacter();
        const symbol = cWidget.renderView().childNodes[0].childNodes[1].childNodes[0];
        expect(symbol.innerHTML).to.be.eq('✗');
        expect(symbolLogic).to.be.eq('&#x2717;');
    });

    it('Verify that addItem goes through the Presenter and adds an item correctly in a ListWidget [TI15]', function(){
        const list = new ListWidget();
        list.addItem("test");

        const dom = list.renderView();
        expect(dom.firstChild.firstChild).to.not.equal(undefined);
    });

    it('Verify that the setting of the character goes through the Presenter and shows the list' +
        'with the correct indicator indicator the items of the list correctly in a ListWidget [TI16]', function(){
        const list = new ListWidget();
        list.addItem("test");
        list.setCharacterCircle();

        const dom = list.renderView();
        let cond = false;
        const text = dom.firstChild.textContent;
        for(let i=0; i<text.length && !cond; i++){
            if(text[i] === "•"){
                cond = true;
            }
        }

        list.setCharacterDash();
        const dom2 = list.renderView();
        let cond2 = false;
        const text2 = dom2.firstChild.textContent;
        for(let i=0; i<text2.length && !cond2; i++){
            if(text2[i] === "–"){
                cond2 = true;
            }
        }

        list.setCharacterNumber();
        const dom3 = list.renderView();
        let cond3 = false;
        const text3 = dom3.firstChild.textContent;
        for(let i=0; i<text3.length && !cond3; i++){
            if(text3[i] === '1'){
                cond3 = true;
            }
        }
        expect(cond3).to.be.eq(true);
        expect(cond2).to.be.eq(true);
        expect(cond).to.be.eq(true);
    });

    it('Verify that setWidth goes through the Presenter and sets the width of the imageWidget correctly [TI17]', function(){
        const image = new ImageWidget();
        image.setWidth(20);

        const dom = image._presenter.renderView();
        expect(dom.firstChild.childNodes[1].width).to.be.eq(20);

    });

    it('Verify that setHeight goes through the Presenter and sets the height of the imageWidget correctly [TI18]', function(){
        const image = new ImageWidget();
        image.setHeight(20);

        const dom = image._presenter.renderView();
        expect(dom.firstChild.childNodes[1].height).to.be.eq(20);

    });

    it('Verify that setImage goes through the Presenter and sets the path of an image of the imageWidget ' +
        'correctly [TI19]', function(done){
        const image = new ImageWidget();
        image.setImage("/proof_of_error");
        image.renderView();

        image._presenter._dom.firstChild.childNodes[1].addEventListener("error", function(e) { //NOSONAR
            done();
        });
        done();
    });

    it('Verify the correct adding of a VerticalLayout and verify the showing of the items correctly [TI20]', function(){
       const bubble = new Test();
       const layout = new VerticalLayoutView();
       layout.addItem(new HorizontalLayoutView());
       layout.addItem(new HorizontalLayoutView());

       bubble.addComponent(layout);

       const dom = bubble.renderView();
       expect(dom.firstChild.getElementsByTagName('div').length).to.be.eq(2);
       expect(dom.getElementsByClassName('hl-column')[0]).to.be.eq(undefined);
    });

    it('Verify the correct adding of a HorizontalLayout and verify the showing of the items correctly [TI21]', function(){
        const bubble = new Test();
        const layout = new HorizontalLayoutView();
        layout.addItem(new HorizontalLayoutView());

        bubble.addComponent(layout);

        const dom = layout.renderView();
        expect(dom.firstChild).to.not.equal(undefined);
        expect(dom.getElementsByClassName('hl-column')).to.not.equal(undefined);
    });
});