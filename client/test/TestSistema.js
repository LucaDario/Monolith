/**
 * Created by Stefano Lia on 29/04/2017
 * Version 1.0.0 - Initial version
 */

describe('System test', function () {

    it('[TSFO1]', function () {
        const bubble = new Monolith.bubble.BaseBubble;
        const text = new Monolith.widgets.TextWidget;
        const button = new Monolith.widgets.ButtonWidget;
        //const checklist = new Monolith.widgets.checklist;
        const image = new Monolith.widgets.ImageWidget;
        const list = new Monolith.widgets.ListWidget;

        let widgets = [text,button,image,list];
        for(let i=0; i<4; i++){
            bubble.add(widgets[i]);
        }
        expect(bubble._layout._items.length).to.be.eq(5);
    });

});