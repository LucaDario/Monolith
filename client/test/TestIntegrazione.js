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

describe('Integration test', function () {
    it('[TI1]', function () {
        const button = new ButtonWidget();
        button.setText('test');

        // verify the text in the Presenter is changed
        expect(button._presenter.getText()).to.be.eq('test');

        // verify the HTML is changed
        expect(button._presenter._dom.innerHTML).to.be.eq('test');
    });

    it('[TI2]', function () {
        const button = new ButtonWidget();
        button.setHeight("200px");

        // verify the text in the Presenter is changed
        expect(button._presenter.getHeight()).to.be.eq('200px');

        // verify the HTML is changed
        expect(button._presenter._dom.style.height === "200px");
    });

    it('[TI3]', function () {
        const button = new ButtonWidget();
        button.setWidth("200px");

        // verify the text in the Presenter is changed
        expect(button._presenter.getWidth()).to.be.eq('200px');

        // verify the HTML is changed
        expect(button._presenter._dom.style.width === "200px");
    });

    it('[TI4]', function () {
        const button = new ButtonWidget();
        button.setBackgroundColor('#FFFFFF');

        // verify the text in the Presenter is changed
        expect(button._presenter.getColor()).to.be.eq('#FFFFFF');

        // verify the HTML is changed
        expect(button._presenter._dom.style.backgroundColor === "#FFFFFF");
    });

    it('[TI5]', function () {
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

    it('[TI6]', function () {
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

    it('[TI7]', function () {
        const text = new TextWidget();

        text.setFormatText(true);
        text.setText("*TEST*");

        // verify the text in the Presenter is changed
        expect(text._presenter.getText()).to.be.eq("*TEST*");

        //verify if the HTML changes
        const domNode = text._presenter.renderView();
        expect(domNode.getElementsByTagName('em')[0].innerText).to.be.eq('TEST');
    });

    it('[TI8]', function () {
        const text = new TextWidget();

        text.setText("test");
        text._presenter.setTextColor('#f00');

        // verify the text in the Presenter is changed
        expect(text._presenter.getColor()).to.be.eq("#f00");

        //verify if the CSS changes
        const domNode = text._presenter.renderView();
        expect(domNode.getElementsByTagName('p')[0].style.color).to.be.eq('rgb(255, 0, 0)');
    });

    it('[TI9]', function () {
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

    it('[TI10]', function () {
        const text = new TextWidget();
        text.setText("[Google](https://www.google.com)");
        text.setFormatText(true);
        text.setUrlHighlightColor('#f00');

        // verify the correct color of the link
        const domNode = text.renderView().getElementsByTagName('a')[0];
        expect(domNode.style.color).to.be.eq('rgb(255, 0, 0)');
    });

    it('[TI11]', function () {
        const text = new TextWidget();
        text.setTextSize(4);

        // verify the correct color of the link
        const domNode = text.renderView();
        expect(domNode.getElementsByTagName('p')[0].style.fontSize).to.be.eq('4px');
    });

    it('[TI12]', function () {
        const check = new ChecklistItemWidget('test');
        check.setUseSelectionMark(true);

        expect(check._presenter._style._useSelectionMark).to.be.eq(true);
    });

    it('[TI13]', function () {
        const check = new ChecklistItemWidget('test');
        check.setUseSelectionMark(true);

        check.setSelectionColor('#f00');

        const box = check._presenter.renderView().childNodes[0].childNodes[1];
        const symbol = check._presenter.renderView().childNodes[0].childNodes[1].childNodes[0];
        expect(box.style.backgroundColor).to.be.eq('rgb(255, 255, 255)');
        expect(symbol.style.backgroundColor).to.be.eq('rgb(255, 255, 255)');
    });

    it('[TI14]', function () {

        const cWidget = new ChecklistItemWidget('test',true);
        cWidget.setSelectionCharacter('&#x2717;');

        const symbolLogic = cWidget._presenter._style.getSelectionCharacter();
        const symbol = cWidget.renderView().childNodes[0].childNodes[1].childNodes[0];
        expect(symbol.innerHTML).to.be.eq('✗');
        expect(symbolLogic).to.be.eq('&#x2717;');
    });

    it('[TI15]', function(){
        const list = new ListWidget();
        list.addItem("test");

        const dom = list.renderView();
        expect(dom.firstChild.firstChild).to.not.equal(undefined);
    });

    it('[TI16]', function(){
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
        expect(cond).to.be.eq(true);
    });

    it('[TI17]', function(){
        const image = new ImageWidget();
        image.setWidth(20);

        const dom = image._presenter.renderView();
        expect(dom.firstChild.childNodes[1].width).to.be.eq(20);

    });

    it('[TI18]', function(){
        const image = new ImageWidget();
        image.setHeight(20);

        const dom = image._presenter.renderView();
        expect(dom.firstChild.childNodes[1].height).to.be.eq(20);

    });

    it('[TI19]', function(done){
        const image = new ImageWidget();
        image.setImage("/proof_of_error");
        image.renderView();

        image._presenter._dom.firstChild.childNodes[1].addEventListener("error", function(e) { //NOSONAR
            done();
        });
        done();
    });

    it('[TI20]', function(){
       const layout = new VerticalLayoutView();
       layout.addItem(new HorizontalLayoutView());
       layout.addItem(new HorizontalLayoutView());

       const dom = layout.renderView();
       console.log(dom);
       expect(dom.getElementsByTagName('div').length).to.be.eq(2);
       expect(dom.getElementsByClassName('hl-column')[0]).to.be.eq(undefined);
    });

    it('[TI21]', function(){
        const layout = new HorizontalLayoutView();
        layout.addItem(new HorizontalLayoutView());

        const dom = layout.renderView();
        console.log(dom.firstChild);
        expect(dom.firstChild).to.not.equal(undefined);
        expect(dom.getElementsByClassName('hl-column')).to.not.equal(undefined);
    });
});