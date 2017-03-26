/*
 * Monolith an interactive bubble provider.
 */


RocketChat.callbacks.add('renderMessage', (message) => {
    let wrapper_id = 'wrapper_' + message._id;
    message.html = '<div id="' + wrapper_id +  '"></div>';
    renderize(message, wrapper_id);
    return message;
}, RocketChat.callbacks.priority.LOW, 'monolith');

function delay(ms){
    let start = new Date().getTime();
    let end = start;
    while(end < start + ms) {
        end = new Date().getTime();
    }
}

function renderize(message, wrapper_id) {
    setTimeout(() => {
        let renderized = false;
        for(let i = 0; i < 5 && !renderized; i++) {
            let element = document.getElementById(wrapper_id);
            if (element !== null && element.children.length === 0) {
                console.log(Monolith);
                let test = new Monolith.widgets.TextWidget();
                test.setText("Test TextWidget " + wrapper_id);
                element.appendChild(test.renderView());
                renderized = true;
            }
        }
    }, 200);
}
