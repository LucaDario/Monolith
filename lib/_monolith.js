Monolith = {};

Monolith.can = require('can');
Monolith.can.stache = require('can-stache');
Monolith.can.DefineMap = require("can-define/map/map");
Monolith.widgets = {};

import {TextWidget} from '../client/component/widget/text/view/TextWidget'
import {ListWidget} from '../client/component/widget/list/view/ListWidget'
Monolith.widgets.TextWidget = TextWidget;

Monolith.widgets.ListWidget = ListWidget;