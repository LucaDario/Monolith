/**
 * Created by manu on 27/06/17.
 */

import {BaseBubble} from "../BaseBubble.js";
import {ImageWidget} from "../../component/widget/image/view/ImageWidget"
import {TextWidget} from "../../component/widget/text/view/TextWidget";

export class ImageBubble extends BaseBubble {

    constructor() {
        super();
        this.text = new TextWidget();
        this.text.setTextColor("#ffffff");
        this.text.setText("Esempio di immagine");

        this.img = new ImageWidget();
        this.img.setImage("https://www.google.it/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png");

        this.addComponent(this.text);
        this.addComponent(this.img);
    }

}
