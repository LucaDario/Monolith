Package.describe({
    name: 'uni2017',
    version: '0.0.1',
    summary: 'Message pre-processor that will process selected markdown notations',
    git: ''
});

Package.onUse(function(api) {
    api.versionsFrom('1.4.1.1');
    api.use([
        'ecmascript',
        'underscore',
        'templating',
        'session',
        'less',
        'http',
        'random',
        'rocketchat:lib',
        'rocketchat:ui-message'
    ]);

    // api.mainModule('uni2017.js');
    api.addFiles('uni2017.js');
    api.export('renderEmoji');
});

// Package.onTest(function(api) {
//     api.use('ecmascript');
//     api.use('tinytest');
//     api.use('uni2017');
//     api.mainModule('uni2017-tests.js');
// });