// Creazione del oggetto Monolith
Monolith = {}; //NOSONAR

// Esportazione librerie di utility
Monolith.can = require('can');
Monolith.can.stache = require('can-stache');
Monolith.can.DefineMap = require("can-define/map/map");

// Esposizione del widget
import {TextWidget} from '../client/component/widget/text/view/TextWidget';
import {ImageWidget} from '../client/component/widget/image/view/ImageWidget';
import {ListWidget} from '../client/component/widget/list/view/ListWidget';
import {ChecklistItemWidget} from '../client/component/widget/checklist/view/ChecklistItemWidget';
import {CheckOption} from '../client/component/widget/checklist/options/CheckOption';
import {CheckStyle} from '../client/component/widget/checklist/style/CheckStyle';
import {ButtonWidget} from '../client/component/widget/button/view/ButtonWidget';

Monolith.widgets = {
    TextWidget : TextWidget,
    ImageWidget: ImageWidget,
    ButtonWidget: ButtonWidget,
    ListWidget: ListWidget,
    checklist : {
        ChecklistWidgetItem:  ChecklistItemWidget,
        CheckOption: CheckOption,
        CheckStyle: CheckStyle
    },

};

// Esposizione dei layout
import {VerticalLayoutView} from '../client/component/layout/vertical/VerticalLayoutView';
import {HorizontalLayoutView} from '../client/component/layout/horizontal/HorizontalLayoutView';
Monolith.layout =  {
    VerticalLayoutView: VerticalLayoutView,
    HorizontalLayoutView: HorizontalLayoutView,
};

// Esportazione bolle
import {AlertBubble} from '../client/bubble/AlertBubble';
import {MarkdownBubble} from '../client/bubble/MarkdownBubble';
import {ToDoListBubble} from '../client/bubble/ToDoListBubble';
import {BaseBubble} from '../client/bubble/BaseBubble';
// DEMO
import {ListBubble} from '../client/bubble/demo/ListBubble';
import {ImageBubble} from '../client/bubble/demo/ImageBubble';
import {ButtonBubble} from '../client/bubble/demo/DemoBubble';

Monolith.bubble = {

    bubbles: {
        text: (message) => {
            return new MarkdownBubble(message.msg);
        },
        todo: (message) =>{
            const test = new ToDoListBubble();
            test.setText('**Esempio di Checklist**');
            test.setFormatText(true);
            test.addItem("Item 1");
            test.addItem("Item 2",true);
            return test;
        },
        img: (message) =>{
            return new ImageBubble();
        },
        list: (message) =>{
            return new ListBubble();
        },
        button: (message) => {
            return new ButtonBubble();
        }
    },

    addBubble: function (bubbleName, bubbleConstructor) {
        Monolith.bubble.bubbles[bubbleName] = bubbleConstructor;
    },

    getBubble : function (bubbleName, message) {
        let bubble;
        if(!Monolith.bubble.bubbles.hasOwnProperty(bubbleName)){
            bubble = new AlertBubble();
            bubble.setTitle('Error');
            bubble.setMessage('Bubble '+ bubbleName + ' not found');
        }
        else{
            bubble = Monolith.bubble.bubbles[bubbleName](message);
        }
        return bubble;
    },

    BaseBubble: BaseBubble,
    AlertBubble: AlertBubble,
    MarkdownBubble:  MarkdownBubble,
    ToDoListBubble: ToDoListBubble,
};
