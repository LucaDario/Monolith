/**
 * Created by Stefano Lia on 28/04/2017
 * Version 1.0.0 - Initial version
 */

import {ButtonWidget} from '../component/widget/button/view/ButtonWidget';
import {TextWidget} from '../component/widget/text/view/TextWidget';

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
        console.log(domNode);
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
        const domNode = text._presenter.renderView().getElementsByTagName('a')[0];
        expect(domNode.style.color).to.be.eq('rgb(255, 0, 0)');
    });
});