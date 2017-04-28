/**
 * Created by Stefano Lia on 28/04/2017
 * Version 1.0.0 - Initial version
 */

import {ButtonWidget} from '../component/widget/button/view/ButtonWidget';

describe('Integration test', function () {
    it('[TI1]', function () {
        const button = new ButtonWidget();
        //button.setText('test');
        expect(button.setText("text")).once;
    });

});