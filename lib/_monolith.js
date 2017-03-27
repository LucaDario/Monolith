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