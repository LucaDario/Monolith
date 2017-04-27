/**
 * Created by Diego Cavestro on 27/04/2017
 * Version 1.0.2 - Lack the TU20, TU21, TU22 and TU23
 */

import {ButtonWidget} from '../view/ButtonWidget';
import {ButtonWidgetPresenter} from './ButtonWidgetPresenter';
import {Exception} from '../../../../exception/Exception';

describe('ButtonWidgetPresenter', function () {
    it('Check that is instantiable', function () {
        // This code will be executed by the test driver when the app is started
        // in the correct mode
        expect(() => {
                new ButtonWidgetPresenter(new ButtonWidget()); //NOSONAR
            }
        ).to.not.throw();
    });
    it('Check that text is set correctly [TU14]', function () {
        // This code will be executed by the test driver when the app is started
        // in the correct mode
        expect(() => {
                const button = new ButtonWidget();
                button._presenter.renderView();
                button._presenter.setText("test");
                if (button._presenter._dom.innerHTML !== "test") {
                    throw new Exception("error");
                }
            }
        ).to.not.throw();
    });
    it('Check that text is not set not correctly [TU15]', function () {
        // This code will be executed by the test driver when the app is started
        // in the correct mode
        expect(() => {
                const button = new ButtonWidget();
                button._presenter.renderView();
                button._presenter.setText(123);
            }
        ).to.throw();
    });
    it('Check that dimensions are set correctly [TU16]', function () {
        // This code will be executed by the test driver when the app is started
        // in the correct mode - part of TU15
        expect(() => {
                const button = new ButtonWidget();
                button._presenter.renderView();
                button._presenter.setWidth("500px");
                button._presenter.setHeight("600px");
                if (button._presenter._dom.style.width !== "500px" || button._presenter._dom.style.height !== "600px") {
                    throw new Exception("error");
                }
            }
        ).to.not.throw();
    });
    it('Check that default dimensions are set correctly [TU17]', function () {
        // This code will be executed by the test driver when the app is started
        // in the correct mode - part of TU15
        expect(() => {
                const button = new ButtonWidget();
                button._presenter.renderView();
                if (button._presenter._dom.style.width === "" || button._presenter._dom.style.height === "") {
                    throw new Exception("error");
                }
            }
        ).to.not.throw();
    });
    it('Check that background color is set correctly [TU18]', function () {
        // This code will be executed by the test driver when the app is started
        // in the correct mode - part of TU15
        expect(() => {
                const button = new ButtonWidget();
                button._presenter.renderView();
                button._presenter.setBackgroundColor("#ffffff");
                //this function transforms an rgb value to the correspondent hex value
                function rgb2hex(rgb) {
                    rgb = rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
                    function hex(x) {
                        return ("0" + parseInt(x).toString(16)).slice(-2);
                    }
                    return "#" + hex(rgb[1]) + hex(rgb[2]) + hex(rgb[3]);
                }
                const hex= rgb2hex(button._presenter._dom.style.backgroundColor);
                if (hex !== "#ffffff") {
                    throw new Exception("error");
                }
            }
        ).to.not.throw();
    });
    it('Check that default background color is set correctly [TU19]', function () {
        // This code will be executed by the test driver when the app is started
        // in the correct mode - part of TU15
        expect(() => {
                const button = new ButtonWidget();
                button._presenter.renderView();
                if (button._presenter._dom.style.backgroundColor === "") {
                    throw new Exception("error");
                }
            }
        ).to.not.throw();
    });
    it('[TU20]', function () {
        // This code will be executed by the test driver when the app is started
        // in the correct mode - part of TU15
        throw new TypeError("NOT IMPLEMENTED");
    });
    it('[TU21]', function () {
        // This code will be executed by the test driver when the app is started
        // in the correct mode - part of TU15
        throw new TypeError("NOT IMPLEMENTED");
    });
    it('[TU22]', function () {
        // This code will be executed by the test driver when the app is started
        // in the correct mode - part of TU15
        throw new TypeError("NOT IMPLEMENTED");
    });
    it('[TU23]', function () {
        // This code will be executed by the test driver when the app is started
        // in the correct mode - part of TU15
        throw new TypeError("NOT IMPLEMENTED");
    });
});
