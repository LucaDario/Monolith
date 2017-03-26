Package.describe({
    name: 'monolith',
    version: '0.0.1',
    summary: 'An interactive bubble provider',
    git: 'https://github.com/NPE-Developers/monolith'
});

Npm.depends({
    "can": "3.5.1",
    "dependency-injection-es6": "1.2.1"
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
      'rocketchat:ui-message'
    ]);

    api.mainModule('monolith.js', 'client');
    // api.addFiles('monolith.js');

    api.addFiles([
        'lib/_monolith.js',
        'client/component/BaseComponent.js',
        'client/component/layout/BaseLayout.js',
        'client/component/layout/horizontal/HorizontalLayoutView.js',
        'client/component/layout/vertical/VerticalLayoutView.js',
        'client/component/widget/BaseWidget.js',
        'client/component/widget/button/options/ButtonGraphics.js',
        'client/component/widget/button/presenter/ButtonWidgetPresenter.js',
        'client/component/widget/button/view/ButtonWidget.js',
        'client/component/widget/button/view/ButtonWidgetView.js',
        'client/component/widget/checklist/options/CheckOption.js',
        'client/component/widget/checklist/presenter/ChecklistWidgetPresenter.js',
        'client/component/widget/checklist/style/CheckStyle.js',
        'client/component/widget/checklist/view/ChecklistWidget.js',
        'client/component/widget/checklist/view/ChecklistWidgetView.js',
        'client/component/widget/image/presenter/ImageWidgetPresenter.js',
        'client/component/widget/image/view/ImageWidget.js',
        'client/component/widget/image/view/ImageWidgetView.js',
        'client/component/widget/image/ImageOption.js',
        'client/component/widget/list/presenter/ListWidgetPresenter.js',
        'client/component/widget/list/style/Indicator.js',
        'client/component/widget/list/view/ListWidget.js',
        'client/component/widget/list/view/ListWidgetView.js',
        'client/component/widget/text/options/TextStyle.js',
        'client/component/widget/text/options/UrlStyle.js',
        'client/component/widget/text/presenter/TextWidgetPresenter.js',
        'client/component/widget/text/view/TextWidget.js',
        'client/component/widget/text/view/TextWidgetView.js',
    ], 'client');
});

Package.onTest(function(api) {
		api.use([
			'jquery',
			'ecmascript',
			'practicalmeteor:mocha',
			'practicalmeteor:chai',
			'practicalmeteor:sinon'
		]);

});