Monolith = {};

Monolith.can = require('can');
Monolith.can.stache = require('can-stache');
Monolith.can.DefineMap = require("can-define/map/map");

// Esposizione del widget
Monolith.widgets = {};

import {TextWidget} from '../client/component/widget/text/view/TextWidget';
Monolith.widgets.TextWidget = TextWidget;

import {ImageWidget} from '../client/component/widget/image/view/ImageWidget';
Monolith.widgets.ImageWidget = ImageWidget;

import {MarkdownBubble} from '../client/bubble/MarkdownBubble';
Monolith.widgets.MarkdownBubble = MarkdownBubble;

import {ToDoListBubble} from '../client/bubble/ToDoListBubble';
Monolith.widgets.ToDoListBubble = ToDoListBubble;

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
            test.setText("CIAO [I'm an inline-style link](https://www.google.com)");
            test.setFormatText(true);
            test.setUrlHighlightColor('#f00');
            test.setTextColor('#f00');
            return test;
        },
        checklist: () => {
            let vl2 = new VerticalLayoutView();

            let test = new ChecklistWidget();
            test.addOption('CIAO');
            test.addOption('VEZ GRANDI MARTEI',true);
            vl2.addItem(test);

            let test2 = new ChecklistWidget();
            test2.setSelectionColor('#0f0');
            test2.setUseSelectionMark(false);
            test2.addOption('VEZ',true);
            test2.addOption('MARTEI!');
            vl2.addItem(test2);
            return vl2;
        },
        list: () => {
            let test = new ListWidget();
            test.addItem("ciao");
            test.addItem("dndn");
            test.setCharacterDash();
            test.setColor('#0f0')
            /*Meteor.call('channelsList(null,"public",90,"name")', 'dataname', function (err, result) {
             if (result) {
             alert(result);
             } else if (err) {
             alert(err);
             }
             });

            Meteor.call ('getRoomIdByNameOrId', "ciao", function(error, result){
                if(result){
                    console.log(result);
                }
            })
            Meteor.call('getUsersOfRoom',"2ayecyyfKuL9d84Hp",true,function(error, result){
                if(result){
                    console.log("====PROVA====");
                    console.log('Item: '+ result.toString());
                    alert(result);
                }
                else if(error){
                    alert(error);
                }
            });*/
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
                test.setBackgroundColor("#F00");
                test.setText("stobottone");
                test.setOnLongClickActionTimer(1000);
                function x() {console.log("questo è click lungo");};
                test.setOnLongClickAction(x);
                function y() {console.log("questo è click normale");};
                test.setOnClickAction(y);
            }, 5000);
            return test;
        },
        demo: () => {
            let test = new HorizontalLayoutView();
            let text1 = new TextWidget();
            text1.setText('**OL**');
            text1.setTextSize(20);
            text1.setFormatText(true);
            let text2 = new TextWidget();
            text2.setText('**AN**');
            text2.setTextSize(20);
            text2.setFormatText(true);
            let text3 = new TextWidget();
            text3.setText('**DA**');
            text3.setTextSize(20);
            text3.setFormatText(true);
            test.addItem(text1);
            test.addItem(text2);
            test.addItem(text3);
            const color = ['#f00', '#aaa', '#00f'];
            setInterval(() => {
                    text1.setTextColor(color[0]);
                    text2.setTextColor(color[1]);
                    text3.setTextColor(color[2]);
                    const temp = color[0];
                    // Metto l'ultimo nel primo
                    color[0] = color[2];
                    // Metto nel ultimo il penultimo
                    color[2] = color[1];
                    // Metto nel penultimo quello che c'era nel primo
                    color[1] = temp;
            }, 100);
            return test;
        },
        image: () => {
            let test1 = new ImageWidget();
            return test1;
        },
        mark: () => {
            let test = new MarkdownBubble("**ciao**");
            return test;
        },
        todo: () => {
            let test = new ToDoListBubble();
            test.setText("**CIAO VEZ MARTEI**");
            test.setFormatText(true);
            test.addItem("MARTEI");
            test.addItem("VEZ MARTEI!",true);
            return test;
        }
    }
};
