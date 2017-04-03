
import {ChecklistWidget} from './ChecklistWidget'

describe('ChecklistWidget', function () {
    it('Check that is instantiable', function () {
        // This code will be executed by the test driver when the app is started
        // in the correct mode
        expect(
            () => {
                new ChecklistWidget();
            }
        ).to.not.throw();
    });

    it('Check that the checkbox status change correctly [TU24]', function () {
        const cWidget = new ChecklistWidget();
    });

    it('[TU25]', function () {
        const cWidget = new ChecklistWidget();
        cWidget.addOption('test');
        const input = cWidget.renderView().childNodes[0].childNodes[0].childNodes[0];
        const box = cWidget.renderView().childNodes[0].childNodes[0].childNodes[1];
        const symbol = cWidget.renderView().childNodes[0].childNodes[0].childNodes[1].childNodes[0];
        expect(input.getAttribute('checked')).to.be.eq('undefined');
        expect(box.getAttribute('class')).to.be.eq('spanNotCheckBef spanEmptyBef');
        expect(symbol.innerHTML).to.be.eq('');
        expect(box.style.backgroundColor).to.be.eq('#fff');
        expect(symbol.style.backgroundColor).to.be.eq('#fff');
    });

    it('[TU26]', function () {
        const cWidget = new ChecklistWidget();
    });

    it('[TU27]', function () {
        const cWidget = new ChecklistWidget();
    });

    it('[TU28]', function () {
        const cWidget = new ChecklistWidget();
    });

    it('[TU29]', function () {
        const cWidget = new ChecklistWidget();
    });

    it('[TU30]', function () {
        const cWidget = new ChecklistWidget();
    });

    it('[TU31]', function () {
        const cWidget = new ChecklistWidget();
    });

    it('[TU32]', function () {
        const cWidget = new ChecklistWidget();
    });

    it('[TU33]', function () {
        const cWidget = new ChecklistWidget();
    });

    it('[TU34]', function () {
        const cWidget = new ChecklistWidget();
    });

    it('[TU35]', function () {
        const cWidget = new ChecklistWidget();
    });
});
