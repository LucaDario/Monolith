
import {ButtonWidget} from './ButtonWidget'
import {Exception} from '../../../../exception/Exception'

describe('ButtonWidget', function () {
    it('Check that is instantiable', function () {
        // This code will be executed by the test driver when the app is started
        // in the correct mode
        expect(
            () => {
                new ButtonWidget();
            }
        ).to.not.throw();
    });

    it('Check that text is set correctly [TU14]', function () {
        // This code will be executed by the test driver when the app is started
        // in the correct mode
        expect(
            () => {
                let button = new ButtonWidget();
                button.renderView();
                button.setText("test");

                if (button._presenter._dom.innerHTML !== "test") {
                    throw new Exception("error");
                }
            }
        ).to.not.throw();
    });

    it('Check that text is not set not correctly [TU15]', function () {
        // This code will be executed by the test driver when the app is started
        // in the correct mode
        expect(
            () => {
                let button = new ButtonWidget();
                button.renderView();
                button.setText(123);
            }
        ).to.throw();
    });

    it('Check that dimensions are set correctly [TU16]', function () {
        // This code will be executed by the test driver when the app is started
        // in the correct mode - part of TU15
        expect(
            () => {
                let button = new ButtonWidget();
                button.renderView();
                button.setWidth("500px");
                button.setHeight("600px");

                if (button._presenter._dom.style.width !== "500px" || button._presenter._dom.style.height !== "600px") {
                    throw new Exception("error");
                }
            }
        ).to.not.throw();
    });

    it('Check that default dimensions are set correctly [TU17]', function () {
        // This code will be executed by the test driver when the app is started
        // in the correct mode - part of TU15
        expect(
            () => {
                let button = new ButtonWidget();
                button.renderView();

                if (button._presenter._dom.style.width === "" || button._presenter._dom.style.height === "") {
                    throw new Exception("error");
                }
            }
        ).to.not.throw();
    });

    it('Check that background color is set correctly [TU18]', function () {
        // This code will be executed by the test driver when the app is started
        // in the correct mode - part of TU15
        expect(
            () => {
                let button = new ButtonWidget();
                button.renderView();

                button.setBackgroundColor("#ffffff");

                //this function transforms an rgb value to the correspondent hex value
                function rgb2hex(rgb) {
                    rgb = rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
                    function hex(x) {
                        return ("0" + parseInt(x).toString(16)).slice(-2);
                    }
                    return "#" + hex(rgb[1]) + hex(rgb[2]) + hex(rgb[3]);
                }

                let hex= rgb2hex(button._presenter._dom.style.backgroundColor);

                if (hex !== "#ffffff") {
                    throw new Exception("error");
                }
            }
        ).to.not.throw();
    });

    it('Check that default background color is set correctly [TU19]', function () {
        // This code will be executed by the test driver when the app is started
        // in the correct mode - part of TU15
        expect(
            () => {
                let button = new ButtonWidget();
                button.renderView();

                if (button._presenter._dom.style.backgroundColor === "") {
                    throw new Exception("error");
                }
            }
        ).to.not.throw();
    });
});
