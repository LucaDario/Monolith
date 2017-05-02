/**
 * Created by Stefano Lia on 29/04/2017
 * Version 1.0.0 - Initial version
 */

class Test extends Monolith.bubble.BaseBubble{
    constructor(){
        super();
    }
}

describe('System tests', function () {

    it('Verify that is possible to add every Widget in Monolith in a generic bubble [TSFO1]', function () {
        const bubble = new Test();
        const text = new Monolith.widgets.TextWidget;
        const button = new Monolith.widgets.ButtonWidget;
        const checklist = new Monolith.widgets.checklist.ChecklistWidgetItem('text');
        const image = new Monolith.widgets.ImageWidget;
        const list = new Monolith.widgets.ListWidget;

        let widgets = [text,button,checklist,image,list];
        for(let i=0; i<5; i++){
            bubble.addComponent(widgets[i]);
        }
        expect(bubble._layout._items.length).to.be.eq(5);
    });

    it('Verify that is possible to add every Layout in Monolith in a generic bubble [TSFO2]', function () {
        const bubble = new Test();
        const hLayout = new Monolith.layout.HorizontalLayoutView;
        const vLayout = new Monolith.layout.VerticalLayoutView;

        let layouts = [hLayout, vLayout];
        for(let i=0; i<2; i++){
            bubble.addComponent(layouts[i]);
        }
        expect(bubble._layout._items.length).to.be.eq(2);
    });

    it('Verify that is possible to use TextWidget in all its functions [TSFO3]', function () {
        expect(() => {
            const text = new Monolith.widgets.TextWidget;
            text.setFormatText(true);
            text.setText('Test');
            text.setTextColor('#FFFFFF');
            text.setTextSize(4);
            text.setText("[Google](https://www.google.com)");
            text.setUrlHighlightColor('#f00');
        }).to.not.throw();
    });

    it('Verify that TextWidget reports error correctly [TSFO4]', function () {
        expect(() => {
            const text = new Monolith.widgets.TextWidget;
            text.setText(44).to.throw(TypeError, "Parameter text type must be a string");
            text.setFormatText('abcd').to.throw(TypeError, "Parameter formatted type must be a boolean");
            text.setSize('abcd').to.throw(TypeError, "Parameter size type must be a number");
            text.setColor('abcd').to.throw(TypeError, "Parameter color type must be a string " +
                "that represents a hex color code");
        });
    });

    it('Verify that is possible to use ImageWidget in all its functions [TSFO5]', function () {
        expect(() => {
            const image = new Monolith.widgets.ImageWidget;
            image.setWidth(40);
            image.setHeight(40);
        }).to.not.throw();
    });

    it('Verify that ImageWidget reports error correctly [TSFO6]', function () {
        expect(() => {
            const image = new Monolith.widgets.ImageWidget;
            image.setPath('');
        }).to.throw();
    });

    it('Verify that is possible to use ButtonWidget in all its functions [TSFO7]', function () {
        expect(() => {
            const button = new Monolith.widgets.ButtonWidget;
            button.setText('test');
            button.setBackgroundColor('#FFFFFF');
            button.setHeight('4px');
            button.setWidth('4px');
            button.renderView();
        }).to.not.throw();
    });

    it('Verify that ButtonWidget reports error correctly [TSFO8]', function () {
        expect(() => {
            const button = new Monolith.widgets.ButtonWidget;
            button.setText(44).to.throw(TypeError, "Parameter text type must be a string");
            button.setHeight(44).to.throw(TypeError, "Parameter height type must be a string");
            button.setWidth(44).to.throw(TypeError, "Parameter width type must be a string");
            button.setBackgroundColor('abcd').to.throw(TypeError, "Parameter color type must be a " +
                "string that represents a hex color code");
        });
    });

    it('Verify that is possible to use ChecklistWidgetItem in all its functions [TSFO9]', function () {
        expect(() => {
            const bubble = new Test();
            //verify all methods
            const check = new Monolith.widgets.checklist.ChecklistWidgetItem('text');
            bubble.addComponent(check);
            check.getId();
            check.setChecked(true);
            check.getChecklistUpdate();
            check.setUseSelectionMark(true);
            check.setSelectionColor('#FFFFFF');
            check.setSelectionCharacter('a');
            let f = function () {
                console.log('TSF09');
            }
            check.setOnLongClick(f);
            check.setOnClick(f);
        }).to.not.throw();
    });

    it('Verify that ChecklistWidgetItem reports error correctly [TSFO10]', function () {
        expect(() => {
            //verify if all methods throw an error correctly
            const check = new Monolith.widgets.checklist.ChecklistWidgetItem('text');
            check.setUseSelectionMark(40).to.throw(TypeError, "Cannot set select mark. Boolean " +
                "value required.");
            check.setSelectionColor('abcd').to.throw(TypeError, "Parameter color type must " +
                "be a string that represents a hex color code");
            check.setSelectionCharacter(40).to.throw(TypeError, "Cannot set select character. " +
                "String value required.");
            check.setChecked(40).to.throw(TypeError, "Cannot set item's check. Boolean value required.");
        });
    });

    it('Verify that is possible to use ListWidget in all its functions [TSF011]', function () {
        expect(() => {
            const bubble = new Test();
            //verify all methods
            const list = new Monolith.widgets.ListWidget;
            bubble.addComponent(list);
            list.addItem('Test');
            list.addItem('Test');
            list.setCharacterNumber();
            list.setCharacterCircle();
            list.setCharacterDash();
            list.setColor('#FFFFFF');
            list.getColor();
            list.getOptions();
            list.getCharacter();
            list.renderView();
        }).to.not.throw();
    });

    it('Verify that ListWidget reports error correctly [TSF012]', function () {
        expect(() => {
            //verify if all methods throw an error correctly
            const list = new Monolith.widgets.ListWidget;
            list.setColor('abcd').to.throw(TypeError, "Parameter color type must be a string " +
                "that represents a hex color code");
        });
    });

    it('Verify that is possible to use VerticalLayoutView in all its functions [TSF013]', function () {
        expect(() => {
            //verify if all methods throw an error correctly
            const layout = new Monolith.layout.VerticalLayoutView;
            layout.addItem(new Monolith.layout.HorizontalLayoutView);
            layout.addItem(new Monolith.widgets.ListWidget);
        }).to.not.throw();
    });

    it('Verify that is possible to use HorizontalLayoutView in all its functions [TSF014]', function () {
        expect(() => {
            //verify if all methods throw an error correctly
            const layout = new Monolith.layout.HorizontalLayoutView;
            layout.addItem(new Monolith.layout.HorizontalLayoutView);
            layout.addItem(new Monolith.widgets.ListWidget);
        }).to.not.throw();
    });

    it('Verify that is possible to use AlertBubble in all its functions [TSF015]', function () {
        expect(() => {
            //verify all methods
            const bubble = new Monolith.bubble.AlertBubble;
            bubble.setTitle('Title');
            bubble.setMessage('Message');
            bubble.renderView();
        }).to.not.throw();
    });

    it('Verify that is possible to use MarkdownBubble in all its functions [TSF016]', function () {
        expect(() => {
            //verify all methods
            const bubble = new Monolith.bubble.MarkdownBubble('test');
            bubble.setText('text');
            bubble.renderView();
        }).to.not.throw();
    });

    it('Verify that is possible to use ToDoListBubble in all its functions [TSF017]', function () {
        expect(() => {
            //verify all methods
            const bubble = new Monolith.bubble.ToDoListBubble;
            bubble.addItem(Monolith.widgets.ListWidget);
            bubble.setChecked(true,0);
            bubble.setItemText('test',0);
            bubble.setText('test');
            bubble.setSelectionColor('#FFFFFF');
            bubble.removeItem(0);
            bubble.setUseSelectionMark(true);
            let f = function () {}
            bubble.setOnLongItemClick(f);
            bubble.setOnItemClick(f);
            bubble.setSelectionCharacter('ab');
            bubble.setTextColor('#FFFFFF');
            bubble.setText("[Google](https://www.google.com)");
            bubble.setFormatText(true);
            bubble.setUrlHighlightColor('#FFFFFF');
            bubble.setTextSize(2);
            bubble.setCompletionMessage('test');
            bubble.getCompletionMessage();
            bubble.getId();
            bubble.renderView();
        }).to.not.throw();
    });
});