import {BaseBubble} from "../BaseBubble.js";
import {ButtonWidget} from "../../component/widget/button/view/ButtonWidget";
import {TextWidget} from "../../component/widget/text/view/TextWidget";

export class ButtonBubble extends BaseBubble {

    constructor() {
        super();

        this.text1 = new TextWidget();
        this.text1.setText("Esempio bottone 1");

        this.btn1 = new ButtonWidget();
        this.btn1.setText("Button 1");

        this.text2 = new TextWidget();
        this.text2.setText("Esempio bottone 2");

        this.btn2 = new ButtonWidget();
        this.btn2.setText("Button 2");

        this.addComponent(this.text1);
        this.addComponent(this.btn1);
        this.addComponent(this.text2);
        this.addComponent(this.btn2);
    }

}
