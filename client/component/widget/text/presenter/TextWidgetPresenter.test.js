/**
 * Created by Manuel Turetta on 27/04/2017
 * Version 1.0.2 - Completed
 * Unit tests for TextWidgetPresenter
 */

import {TextWidgetPresenter} from './TextWidgetPresenter.js';
import {TextWidget} from '../view/TextWidget';

describe('TextWidgetPresenter', function () {
    it('Check that is instantiable', function () {
        // This code will be executed by the test driver when the app is started
        // in the correct mode
        expect(
            () => {
                new TextWidgetPresenter(new TextWidget()); //NOSONAR
            }
        ).to.not.throw();
    });

    it('Check that the font size is correct [TU1]', function () {
        const tWidget = new TextWidget();
        tWidget._presenter.setText("CIAO");
        tWidget._presenter.setTextSize(10);
        const domNode = tWidget._presenter.renderView();
        expect(domNode.getElementsByTagName('p')[0].style.fontSize).to.be.eq('10px');
    });

    it('Check that the default font size is 1em [TU2]', function () {
        const tWidget = new TextWidget();
        tWidget._presenter.setText("CIAO");
        const domNode = tWidget._presenter.renderView();
        expect(domNode.getElementsByTagName('p')[0].style.fontSize).to.be.eq('1em');
    });

    it('Check that the italic font style is setted up correctly [TU3]', function () {
        const tWidget = new TextWidget();
        tWidget._presenter.setText("*CIAO*");
        tWidget._presenter.setFormatText(true);
        const domNode = tWidget._presenter.renderView();
        expect(domNode.getElementsByTagName('em')[0].innerText).to.be.eq('CIAO');
    });

    it('Check that the clickable link is setted up correctly [TU4]', function () {
        const tWidget = new TextWidget();
        tWidget._presenter.setText("[Google](https://www.google.com)");
        tWidget._presenter.setFormatText(true);
        const domNode = tWidget._presenter.renderView().getElementsByTagName('a')[0];
        expect(domNode.innerText).to.be.eq('Google');
        expect(domNode.getAttribute('href')).to.be.eq('https://www.google.com');
    });

    it('Check that the clickable link have the correct color [TU5]', function () {
        const tWidget = new TextWidget();
        tWidget._presenter.setText("[Google](https://www.google.com)");
        tWidget._presenter.setFormatText(true);
        tWidget._presenter.setUrlHighlightColor('#f00');
        const domNode = tWidget._presenter.renderView().getElementsByTagName('a')[0];
        expect(domNode.style.color).to.be.eq('rgb(255, 0, 0)');
    });

    it('Check that the strong font style is setted up correctly [TU6]', function () {
        const tWidget = new TextWidget();
        tWidget._presenter.setText("**Strong** not strong **2Strong**");
        tWidget._presenter.setFormatText(true);
        const strongNodes = tWidget._presenter.renderView().getElementsByTagName('strong');
        expect(strongNodes.length).to.be.eq(2);
        expect(strongNodes[0].innerText).to.be.eq('Strong');
        expect(strongNodes[1].innerText).to.be.eq('2Strong');

    });

    it('Check that the text color is setted correctly [TU7]', function () {
        const tWidget = new TextWidget();
        tWidget.setTextColor("#123");
        expect(tWidget._presenter._textstyle.getColor()).to.be.eq('#123');
    });

    it('Check that the default text color is black [TU8]', function () {
        const tWidget = new TextWidget();
        expect(tWidget._presenter._textstyle.getColor()).to.be.eq('#000');
    });

});
