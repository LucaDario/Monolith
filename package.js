Package.describe({
    name: 'monolith',
    version: '0.0.1',
    summary: 'An interactive bubble provider',
    git: 'https://github.com/NPE-Developers/monolith'
});

Package.onUse(function(api) {
    api.versionsFrom('1.4.1.1');
    api.use([
        'jquery',
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
	api.addFiles('client/component/BaseComponent.js', 'client');
	api.addFiles('client/component/layout/BaseLayout.js', 'client');
	api.addFiles('client/component/layout/horizontal/HorizontalLayoutView.js', 'client');
	api.addFiles('client/component/layout/vertical/VerticalLayoutView.js', 'client');
});

Package.onTest(function(api) {
    api.use([
		'jquery',
		'ecmascript',
        'practicalmeteor:mocha',
        'practicalmeteor:chai',
        'practicalmeteor:sinon'
    ]);

	api.addFiles([
		'client/component/BaseComponent.js',
		'client/component/BaseComponent.test.js',
		'client/component/widget/BaseWidget.js',
		'client/component/widget/BaseWidget.test.js',
		'client/component/layout/BaseLayout.js',
		'client/component/layout/BaseLayout.test.js'
		], 'client'
	);

});
