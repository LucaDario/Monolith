/*
 * Monolith an interactive bubble provider.
 */

RocketChat.callbacks.add('renderMessage', (message) => {
    // Parse the message

    const regEx = /\[\S+\]/g;
    const results = regEx.exec(message.msg);
    let bubbleType = null;

    if(message.hasOwnProperty(bubbleType)){
        bubbleType = message.bubbleType;
    }
    else if(results !== null){
        bubbleType = results[0].replace(']', '').replace('[', '');
        message.msg = message.msg.replace(results[0], '');
    }

    if(bubbleType !== null){
        const wrapper_id = 'wrapper_' + message._id;
        message.html = '<div id="' + wrapper_id + '" class="bubble round"></div>';
        renderizeBubble(message, wrapper_id, bubbleType);
    }
    return message;
}, RocketChat.callbacks.priority.LOW, 'monolith');

function renderizeBubble(message, wrapper_id, bubbleName) {
    const intervalId = setInterval(() => {
        const element = document.getElementById(wrapper_id);
        if (element !== null && element.children.length === 0) {
            const bubble = Monolith.bubble.getBubble(bubbleName, message);
            element.appendChild(bubble.renderView());
            clearInterval(intervalId);
        }
    }, 200);
}
