/*
 * Monolith an interactive bubble provider.
 */


RocketChat.callbacks.add('renderMessage', (message) => {
    // Parse the message

    const regEx = /\[\S+\]/g;
    results = regEx.exec(message.msg);
    let bubbleType = null;

    if(message.bubbleType !== 'undefined' && message.bubbleType !== null){
        bubbleType = message.bubbleType;
    }
    else if(results !== null){
        bubbleType = results[0].replace(']', '').replace('[', '');
    }

    if(bubbleType !== null){
        let wrapper_id = 'wrapper_' + message._id;
        message.html = '<div id="' + wrapper_id + '"></div>';
        renderizeBubble(message.msg.replace(results[0], ''), wrapper_id, bubble_name);
    }
    else if(WidgetResolver.widgets.hasOwnProperty(message.msg)) {
        let wrapper_id = 'wrapper_' + message._id;
        message.html = '<div id="' + wrapper_id + '"></div>';
        renderize(message, wrapper_id);
    }
    return message;
}, RocketChat.callbacks.priority.LOW, 'monolith');

function renderize(message, wrapper_id) {
    setTimeout(() => {
        let renderized = false;
        for(let i = 0; i < 5 && !renderized; i++) {
            let element = document.getElementById(wrapper_id);
            if (element !== null && element.children.length === 0) {
                try {
                    let test = WidgetResolver.widgets[message.msg]();
                    element.appendChild(test.renderView());
                }catch(err) {
                    element.appendChild(document.createTextNode(
                        "Errore nel renderizzare il widget associato a " +
                        message.msg + ":\n" +
                        err.message
                    ));
                    throw err;
                }finally {
                    renderized = true;
                }
            }
        }
    }, 200);
}

function renderizeBubble(message, wrapper_id, bubbleName) {
    setTimeout(() => {
        let renderized = false;
        for(let i = 0; i < 5 && !renderized; i++) {
            let element = document.getElementById(wrapper_id);
            if (element !== null && element.children.length === 0) {
                const bubble = Monolith.bubble.getBubble(bubbleName, message);
                element.appendChild(bubble.renderView());
                renderized = true;

            }
        }
    }, 200);
}
