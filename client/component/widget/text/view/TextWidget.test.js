
import {TextWidget} from './TextWidget'

describe('TextWidget', function () {
    it('Check that is instantiable', function () {
        // This code will be executed by the test driver when the app is started
        // in the correct mode
        expect(
            () => {
                new TextWidget();
            }
        ).to.not.throw();
    });

    it('Check that the font size is correct [TU1]', function () {
        const tWidget = new TextWidget();
        tWidget.setText("CIAO");
        tWidget.setTextSize(10);
        const domNode = tWidget.renderView();
        expect(domNode.getElementsByTagName('p')[0].style.fontSize).to.be.eq('10px');
    });

    it('Check that the default font size is 1em [TU2]', function () {
        const tWidget = new TextWidget();
        tWidget.setText("CIAO");
        const domNode = tWidget.renderView();
        expect(domNode.getElementsByTagName('p')[0].style.fontSize).to.be.eq('1em');
    });

    it('Check that the italic font style is setted up correctly [TU3]', function () {
        const tWidget = new TextWidget();
        tWidget.setText("*CIAO*");
        tWidget.setFormatText(true);
        const domNode = tWidget.renderView();
        expect(domNode.getElementsByTagName('em')[0].innerText).to.be.eq('CIAO');
    });

    it('Check that the clickable link is setted up correctly [TU4]', function () {
        const tWidget = new TextWidget();
        tWidget.setText("[Google](https://www.google.com)");
        tWidget.setFormatText(true);
        const domNode = tWidget.renderView().getElementsByTagName('a')[0];
        expect(domNode.innerText).to.be.eq('Google');
        expect(domNode.getAttribute('href')).to.be.eq('https://www.google.com');
    });

    it('Check that the clickable link have the correct color [TU5]', function () {
        const tWidget = new TextWidget();
        tWidget.setText("[Google](https://www.google.com)");
        tWidget.setFormatText(true);
        tWidget.setUrlHighlightColor('#f00');
        const domNode = tWidget.renderView().getElementsByTagName('a')[0];
        expect(domNode.style.color).to.be.eq('rgb(255, 0, 0)');
    });

    it('Check that the strong font style is setted up correctly [TU6]', function () {
        const tWidget = new TextWidget();
        tWidget.setText("**Strong** not strong **2Strong**");
        tWidget.setFormatText(true);
        const strongNodes = tWidget.renderView().getElementsByTagName('strong');
        expect(strongNodes.length).to.be.eq(2);
        expect(strongNodes[0].innerText).to.be.eq('Strong');
        expect(strongNodes[1].innerText).to.be.eq('2Strong');

    });

    it('Check that the default text color is black [TU7]', function () {
        const tWidget = new TextWidget();
        expect(tWidget._presenter._textstyle.getColor()).to.be.eq('#000');
    });

});
