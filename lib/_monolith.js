Monolith = {};

Monolith.can = require('can');
Monolith.can.stache = require('can-stache');
Monolith.can.DefineMap = require("can-define/map/map");

// Esposizione del widget
Monolith.widgets = {};

import {TextWidget} from '../client/component/widget/text/view/TextWidget';
Monolith.widgets.TextWidget = TextWidget;

import {ChecklistWidget} from '../client/component/widget/checklist/view/ChecklistWidget';
import {CheckOption} from '../client/component/widget/checklist/options/CheckOption';
import {CheckStyle} from '../client/component/widget/checklist/style/CheckStyle';
Monolith.widgets.checklist = {
    ChecklistWidget:  ChecklistWidget,
    CheckOption: CheckOption,
    CheckStyle: CheckStyle
};

import {ListWidget} from '../client/component/widget/list/view/ListWidget';
Monolith.widgets.ListWidget = ListWidget;

// Esposizione dei layout
Monolith.layout =  {};
import {VerticalLayoutView} from '../client/component/layout/vertical/VerticalLayoutView';
Monolith.layout.VerticalLayoutView = VerticalLayoutView;

import {HorizontalLayoutView} from '../client/component/layout/horizontal/HorizontalLayoutView';
Monolith.layout.HorizontalLayoutView = HorizontalLayoutView;

import {ButtonWidget} from '../client/component/widget/button/view/ButtonWidget';
Monolith.widgets.ButtonWidget = ButtonWidget;

/**
 * Questo oggetto viene utilizzato per trasformare il test di un messaggio in un widget per fare dei test grafici
 * Es:
 * Se mando un messaggio con testo = text verrà creato un widget di tipo testo
 * @type {{widgets: {text: TextWidget, checklist: ChecklistWidget, list: ListWidget}}}
 */
WidgetResolver = {
    widgets: {
        text: () => {
            let test = new TextWidget();
            test.setText("Test di un textWidget");
            return test;
        },
        checklist: () => {
            let test = new ChecklistWidget();
            return test;
        },
        list: () => {
            let test = new ListWidget();
            test.addItem("ciao");
            test.addItem("dndn");
            test.setCharacterSign();
            return test;
        },
        vl: () => {
            let test = new VerticalLayoutView();
            let testText1 = new TextWidget();
            testText1.setText("TEST1");
            let testText2 = new TextWidget();
            testText2.setText("TEST2");
            test.addItem(testText1);
            test.addItem(testText2);
            setTimeout(() => {
              testText2.setText("TEST2 Aggiornato");
              testText1.setText("TEST1 Aggiornato");
              let text = new TextWidget();
              text.setText("Aggiunto ");
              test.addItem(text);
            }, 2500);
            return test;
        },
        hl: () => {
            let test = new HorizontalLayoutView();
            let testText1 = new TextWidget();
            testText1.setText("TEST1");
            let testText2 = new TextWidget();
            testText2.setText("TEST2");
            test.addItem(testText1);
            test.addItem(testText2);
            setTimeout(() => {
                testText2.setText("TEST2 Aggiornato");
                testText1.setText("TEST1 Aggiornato");
                let text = new TextWidget();
                text.setText("Aggiunto ");
                test.addItem(text);
            }, 2500);
            return test;
        },
        button: () => {
            let test = new ButtonWidget();
            setTimeout(() => {
                test.setBackgroundColor("#FFFFFF");
            }, 2500);
            return test;
        }
    }
};