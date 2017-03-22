/* globals isSetNotNull */
/*
 * emojiParser is a function that will replace emojis
 * @param {Object} message - The message object
 */

RocketChat.callbacks.add('renderMessage', (message) => {
    // console.log(message, RocketChat.models.Messages);
    // let rid = Session.get('openedRoom');
    let currentTime = new Date().getTime();

    let token = '=&=' + (Random.id()) + '=&=';
    message.tokens = [];
    message.tokens.push({
        token: token,
        text: '<div class="button btn" onclick="console.log(\'pippo\')">' + message.msg + '</div>'
    });
    message.html = token;

    return message;
}, RocketChat.callbacks.priority.LOW, 'monolith');