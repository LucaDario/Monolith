import {BaseBubble} from "../BaseBubble.js";
import {TextWidget} from "../../component/widget/text/view/TextWidget";
import {ListWidget} from "../../component/widget/list/view/ListWidget";

export class ListBubble extends BaseBubble {

    constructor() {
        super();
        this.text = new TextWidget();
        this.text.setTextColor("#ffffff");
        this.text.setText("Esempio di lista");
        this.list = new ListWidget();
        this.list.setColor("#ffffff");
        this.list.addItem("Item 1");
        this.list.addItem("Item 2");
        this.list.addItem("Item 3");

        this.addComponent(this.text);
        this.addComponent(this.list);
    }

}
