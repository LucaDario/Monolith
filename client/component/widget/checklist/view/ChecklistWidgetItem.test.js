
import {ChecklistWidgetItem} from './ChecklistWidgetItem'
describe('ChecklistWidgetItemItem', function () {
    it('Check that is instantiable', function () {
        // This code will be executed by the test driver when the app is started
        // in the correct mode
        expect(
            () => {
                new ChecklistWidgetItem();
            }
        ).to.not.throw();
    });
    it('[TU24] Check that the checkbox can be instantiated with "not checked" status', function () {
        const cWidget = new ChecklistWidgetItem();
        cWidget.createOption('test');
        const input = cWidget.renderView().childNodes[0].childNodes[0];
        const box = cWidget.renderView().childNodes[0].childNodes[1];
        const symbol = cWidget.renderView().childNodes[0].childNodes[1].childNodes[0];
        const check= cWidget._presenter._options.isChecked();
        expect(check).to.be.eq(false);
        expect(input.getAttribute('checked')).to.be.eq(null);
        expect(box.getAttribute('class')).to.be.eq('spanNotCheckBef spanEmptyBef');
        expect(symbol.innerHTML).to.be.eq('');
        expect(box.style.backgroundColor).to.be.eq('rgb(255, 255, 255)');
        expect(symbol.style.backgroundColor).to.be.eq('rgb(255, 255, 255)');
    });

    it('[TU25] Check that the checkbox can be instantiated with "checked" status', function () {
        const cWidget = new ChecklistWidgetItem();
        cWidget.createOption('test',true);
        const input = cWidget.renderView().childNodes[0].childNodes[0];
        const box = cWidget.renderView().childNodes[0].childNodes[1];
        const symbol = cWidget.renderView().childNodes[0].childNodes[1].childNodes[0];
        const check= cWidget._presenter._options.isChecked();
        expect(check).to.be.eq(true);
        expect(input.getAttribute('checked')).to.be.eq('checked');
        expect(box.getAttribute('class')).to.be.eq('spanCheckBef spanEmptyBef');
        expect(symbol.innerHTML).to.be.eq('✓');
    });

    it('[TU26] Check that the checkbox status change correctly', function () {
        const cWidget = new ChecklistWidgetItem();
        const cWidget2 = new ChecklistWidgetItem();
        cWidget.createOption('test');
        cWidget2.createOption('test2',true);
        cWidget.setChecked(true);
        cWidget2.setChecked(false);

        const input = cWidget.renderView().childNodes[0].childNodes[0];
        const box = cWidget.renderView().childNodes[0].childNodes[1];
        const symbol = cWidget.renderView().childNodes[0].childNodes[1].childNodes[0];

        const input2 = cWidget2.renderView().childNodes[0].childNodes[0];
        const box2 = cWidget2.renderView().childNodes[0].childNodes[1];
        const symbol2 = cWidget2.renderView().childNodes[0].childNodes[1].childNodes[0];

        const check= cWidget._presenter._options.isChecked();
        const check2 = cWidget2._presenter._options.isChecked();

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
        const cWidget = new ChecklistWidgetItem();
        cWidget.createOption('test',true);
        const symbol = cWidget.renderView().childNodes[0].childNodes[1].childNodes[0];
        expect(symbol.innerHTML).to.be.eq('✓');
    });

    it('[TU28] Check that the checkbox check-mark is represented by ✗ or another symbol', function () {
        const cWidget = new ChecklistWidgetItem();
        cWidget.setSelectionCharacter('&#x2717;');
        cWidget.createOption('test',true);
        const symbolLogic = cWidget._presenter._style.getSelectionCharacter();
        const symbol = cWidget.renderView().childNodes[0].childNodes[1].childNodes[0];
        expect(symbol.innerHTML).to.be.eq('✗');
        expect(symbolLogic).to.be.eq('&#x2717;');
    });

    it('[TU29] Check that the type checkbox color of the selected items are displayed with the color set', function () {
        const cWidget = new ChecklistWidgetItem();
        cWidget.setUseSelectionMark(false);
        cWidget.setSelectionColor('#00f');
        cWidget.createOption('test',true);
        const symbolLogic = cWidget._presenter._style.getSelectionCharacter();
        const box = cWidget.renderView().childNodes[0].childNodes[1];
        const symbol = cWidget.renderView().childNodes[0].childNodes[1].childNodes[0];
        expect(box.style.backgroundColor).to.be.eq('rgb(0, 0, 255)');
        expect(symbol.style.backgroundColor).to.be.eq('rgb(0, 0, 255)');
        expect(symbol.innerHTML).to.be.eq('');
        expect(symbolLogic).to.be.eq('');
    });

});
