/*
 * Monolith an interactive bubble provider.
 */


RocketChat.callbacks.add('renderMessage', (message) => {
    // Parse the message

    const regEx = /\[\S+\]/g;
    results = regEx.exec(message.msg);
    let bubbleType = null;

    if(message.bubbleType != null){
        bubbleType = message.bubbleType;
    }
    else if(results !== null){
        bubbleType = results[0].replace(']', '').replace('[', '');
        message.msg = message.msg.replace(results[0], '');
    }

    if(bubbleType !== null){
        let wrapper_id = 'wrapper_' + message._id;
        message.html = '<div id="' + wrapper_id + '" class="bubble round"></div>';
        renderizeBubble(message, wrapper_id, bubbleType);
    }
    return message;
}, RocketChat.callbacks.priority.LOW, 'monolith');

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
