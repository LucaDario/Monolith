Package.describe({
    name: 'monolith',
    version: '0.0.1',
    summary: 'An interactive bubble provider',
    git: 'https://github.com/NPE-Developers/monolith'
});

Package.onUse(function(api) {
    api.versionsFrom('1.4.1.1');
    api.use([
        'coffeescript',
        'ecmascript',
        'underscore',
        'templating',
        'session',
        'less',
        'random',
        'rocketchat:lib',
        'rocketchat:ui-message',
        'vue:vue@1.0.8'
    ]);

    // api.mainModule('monolith.js');
    api.addFiles('monolith.js');
    api.export('renderEmoji');
});

Package.onTest(function(api) {
     api.use('ecmascript');
});