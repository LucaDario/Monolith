/* globals isSetNotNull */
/*
 * emojiParser is a function that will replace emojis
 * @param {Object} message - The message object
 */

Meteor.startup(function() {
    RocketChat.MessageTypes.registerType({
        id: 'uni2017_action_link',
        system: true,
        message: 'Open tabbar type'
    });
});

RocketChat.actionLinks.register('ALUni2017', function(message, params) {
    if (Meteor.isClient) {
        $.post('https://httpbin.org/post', {
                    "key": "value"
                },
                null)
            .done(function(resp) {
                console.log(resp);
            });
    }
    if (Meteor.isServer) {
        HTTP.call("POST", "https://httpbin.org/post", { data: { some: "json", stuff: 1 } },
            function(error, result) {

                RocketChat.models.Messages.createWithTypeRoomIdMessageAndUser(
                    'uni2017_action_link',
                    'GENERAL',
                    'Thanks, you pressed the button',
                    Meteor.userId(), {
                        actionLinks: [
                            { icon: 'icon-pencil', label: 'Thanks', method_id: 'ALUni2017', params: message },
                        ]
                    },
                );
            });
    }
});


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

    if (Meteor.isServer) {
        RocketChat.models.Messages.createWithTypeRoomIdMessageAndUser('uni2017_action_link', message.rid, '', message.u._id, {
            actionLinks: [
                { icon: 'icon-edit', label: 'Open tab Bar', method_id: 'ALUni2017', params: message },
                { icon: 'icon-cancel', label: 'Open tab Bar', method_id: 'ALUni2017', params: message }
            ]
        });
    }
    return message;
}, RocketChat.callbacks.priority.LOW, 'uni2017');