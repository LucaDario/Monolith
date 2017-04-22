// Creazione del oggetto Monolith
Monolith = {};

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
Monolith.bubble = {

    bubbles: {
        markdown: (message) => {
            return new MarkdownBubble(message.msg);
        },
        todo: () =>{
            let test = new ToDoListBubble();
            test.setText('**VEZ MARTEI LISTA CHECKLIST**');
            test.setFormatText(true);
            test.addItem("MARTEI");
            test.addItem("VEZ MARTEI!",true);
            test.setItemText("WELLA",1);
            return test;
        }
    },

    addBubble: function (bubbleName, bubbleConstructor) {
        Monolith.bubble.bubbles[bubbleName] = bubbleConstructor;
    },

    getBubble : function (bubbleName, message) {
        let bubble;
        if(!Monolith.bubble.bubbles.hasOwnProperty(bubbleName)){
            bubble = new AlertBubble();
            bubble.setTittle('Error');
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
