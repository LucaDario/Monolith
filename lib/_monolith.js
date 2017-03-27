Monolith = {};

Monolith.can = require('can');
Monolith.can.stache = require('can-stache');
Monolith.can.DefineMap = require("can-define/map/map");
Monolith.widgets = {};

import {TextWidget} from '../client/component/widget/text/view/TextWidget'
Monolith.widgets.TextWidget = TextWidget;

import {ChecklistWidget} from '../client/component/widget/checklist/view/ChecklistWidget'
import {CheckOption} from '../client/component/widget/checklist/options/CheckOption'
import {CheckStyle} from '../client/component/widget/checklist/style/CheckStyle'
Monolith.widgets.checklist = {
    ChecklistWidget:  ChecklistWidget,
    CheckOption: CheckOption,
    CheckStyle: CheckStyle
};

import {ListWidget} from '../client/component/widget/list/view/ListWidget'
Monolith.widgets.ListWidget = ListWidget;


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
            return test;
        }
    }
};