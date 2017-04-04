
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

    it('[TU24] Check that the checkbox can be instantiated with "not checked" status', function () {
        const cWidget = new ChecklistWidget();
        cWidget.addOption('test');
        const input = cWidget.renderView().childNodes[0].childNodes[0].childNodes[0];
        const box = cWidget.renderView().childNodes[0].childNodes[0].childNodes[1];
        const symbol = cWidget.renderView().childNodes[0].childNodes[0].childNodes[1].childNodes[0];
        const check= cWidget._presenter._options[0].isChecked();
        expect(check).to.be.eq(false);
        expect(input.getAttribute('checked')).to.be.eq(null);
        expect(box.getAttribute('class')).to.be.eq('spanNotCheckBef spanEmptyBef');
        expect(symbol.innerHTML).to.be.eq('');
        expect(box.style.backgroundColor).to.be.eq('rgb(255, 255, 255)');
        expect(symbol.style.backgroundColor).to.be.eq('rgb(255, 255, 255)');
    });

    it('[TU25] Check that the checkbox can be instantiated with "checked" status', function () {
        const cWidget = new ChecklistWidget();
        cWidget.addOption('test',true);
        const input = cWidget.renderView().childNodes[0].childNodes[0].childNodes[0];
        const box = cWidget.renderView().childNodes[0].childNodes[0].childNodes[1];
        const symbol = cWidget.renderView().childNodes[0].childNodes[0].childNodes[1].childNodes[0];
        const check= cWidget._presenter._options[0].isChecked();
        expect(check).to.be.eq(true);
        expect(input.getAttribute('checked')).to.be.eq('checked');
        expect(box.getAttribute('class')).to.be.eq('spanCheckBef spanEmptyBef');
        expect(symbol.innerHTML).to.be.eq('✓');
    });

    it('[TU26] Check that the checkbox status change correctly', function () {
        const cWidget = new ChecklistWidget();
        cWidget.addOption('test');
        cWidget.addOption('test2',true);
        cWidget.setChecked(true,0);
        cWidget.setChecked(false,1);

        const input = cWidget.renderView().childNodes[0].childNodes[0].childNodes[0];
        const box = cWidget.renderView().childNodes[0].childNodes[0].childNodes[1];
        const symbol = cWidget.renderView().childNodes[0].childNodes[0].childNodes[1].childNodes[0];

        const input2 = cWidget.renderView().childNodes[1].childNodes[0].childNodes[0];
        const box2 = cWidget.renderView().childNodes[1].childNodes[0].childNodes[1];
        const symbol2 = cWidget.renderView().childNodes[1].childNodes[0].childNodes[1].childNodes[0];

        const check= cWidget._presenter._options[0].isChecked();
        const check2 = cWidget._presenter._options[1].isChecked();

        expect(check).to.be.eq(true);
        expect(check2).to.be.eq(false);

        expect(input.getAttribute('checked')).to.be.eq('checked');
        expect(box.getAttribute('class')).to.be.eq('spanCheckBef spanEmptyBef');
        expect(symbol.innerHTML).to.be.eq('✓');
        expect(box.style.backgroundColor).to.be.eq('rgb(255, 255, 255)');
        expect(symbol.style.backgroundColor).to.be.eq('rgb(255, 255, 255)');

        expect(input2.getAttribute('checked')).to.be.eq(null);
        expect(box2.getAttribute('class')).to.be.eq('spanNotCheckBef spanEmptyBef');
        expect(symbol2.innerHTML).to.be.eq('');
    });

    it('[TU27] Check that the checkbox check-mark is represented by ✓', function () {
        const cWidget = new ChecklistWidget();
        cWidget.addOption('test',true);
        const symbol = cWidget.renderView().childNodes[0].childNodes[0].childNodes[1].childNodes[0];
        expect(symbol.innerHTML).to.be.eq('✓');
    });

    it('[TU28] Check that the checkbox check-mark is represented by ✗ or another symbol', function () {
        const cWidget = new ChecklistWidget();
        cWidget.setSelectionCharacter('&#x2717;');
        cWidget.addOption('test',true);
        const symbolLogic = cWidget._presenter._style.getSelectionCharacter();
        const symbol = cWidget.renderView().childNodes[0].childNodes[0].childNodes[1].childNodes[0];
        expect(symbol.innerHTML).to.be.eq('✗');
        expect(symbolLogic).to.be.eq('&#x2717;');
    });

    it('[TU29] Check that the type checkbox color of the selected items are displayed with the color set', function () {
        const cWidget = new ChecklistWidget();
        cWidget.setUseSelectionMark(false);
        cWidget.setSelectionColor('#00f');
        cWidget.addOption('test',true);
        const symbolLogic = cWidget._presenter._style.getSelectionCharacter();
        const box = cWidget.renderView().childNodes[0].childNodes[0].childNodes[1];
        const symbol = cWidget.renderView().childNodes[0].childNodes[0].childNodes[1].childNodes[0];
        expect(box.style.backgroundColor).to.be.eq('rgb(0, 0, 255)');
        expect(symbol.style.backgroundColor).to.be.eq('rgb(0, 0, 255)');
        expect(symbol.innerHTML).to.be.eq('');
        expect(symbolLogic).to.be.eq('');
    });

    it('[TU30] Check if an event \'clickCheckEvent\' is emitted correctly and then does the expected operations', function () {
        const cWidget = new ChecklistWidget();
        cWidget.addOption('test');
        cWidget.addOption('test2',true);

        const input = cWidget.renderView().childNodes[0].childNodes[0].childNodes[0];
        const box = cWidget.renderView().childNodes[0].childNodes[0].childNodes[1];
        const symbol = cWidget.renderView().childNodes[0].childNodes[0].childNodes[1].childNodes[0];
        const input2 = cWidget.renderView().childNodes[1].childNodes[0].childNodes[0];
        const box2 = cWidget.renderView().childNodes[1].childNodes[0].childNodes[1];
        const symbol2 = cWidget.renderView().childNodes[1].childNodes[0].childNodes[1].childNodes[0];

        cWidget._presenter._options[0].onClick(cWidget._eventClick,0);
        cWidget._presenter._options[1].onClick(cWidget._eventClick,1);

        expect(input.getAttribute('checked')).to.be.eq('checked');
        expect(box.getAttribute('class')).to.be.eq('spanCheckBef spanEmptyBef');
        expect(symbol.innerHTML).to.be.eq('✓');

        expect(input2.getAttribute('checked')).to.be.eq(null);
        expect(box2.getAttribute('class')).to.be.eq('spanNotCheckBef spanEmptyBef');
        expect(symbol2.innerHTML).to.be.eq('');
    });


});
