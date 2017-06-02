Package.describe({
    name: 'monolith',
    version: '0.0.1',
    summary: 'An interactive bubble provider',
    git: 'https://github.com/NPE-Developers/monolith'
});

Npm.depends({
    "can": "3.5.1",
    "can-stache": "3.0.20",
    "dependency-injection-es6": "1.2.1",
    "es6-event-emitter" : "1.8.2",
    "bootstrap-jquery" : "3.3.2",
    "marked": "0.3.6",
    "vue" : "2.2.6",
    "bootbox" : "4.4.0"
});

Package.onUse(function(api) {
    api.versionsFrom('1.4.1.1');
    api.use([
        'urigo:static-templates',
        'coffeescript',
        'ecmascript',
        'underscore',
        'session',
        'less',
        'random',
        'rocketchat:lib',
        'rocketchat:ui-message'
    ]);

    api.mainModule('monolith.js', 'client');

    api.addFiles([
        'client/bubble/BaseBubble.js',
        'client/bubble/AlertBubble.js',
        'client/bubble/MarkdownBubble.js',
        'client/bubble/ToDoListBubble.js',
        'lib/_monolith.js',
        'client/component/BaseComponent.js',
        'client/component/layout/BaseLayout.js',
        'client/component/layout/horizontal/HorizontalLayoutView.js',
        'client/component/layout/vertical/VerticalLayoutView.js',
        'client/component/widget/BaseWidget.js',
        'client/component/widget/button/options/ButtonGraphics.js',
        'client/component/widget/button/presenter/ButtonWidgetPresenter.js',
        'client/component/widget/button/view/ButtonWidget.js',
        'client/component/widget/button/ButtonWidgetView.js',
        'client/component/widget/checklist/options/CheckOption.js',
        'client/component/widget/checklist/presenter/ChecklistItemWidgetPresenter.js',
        'client/component/widget/checklist/style/CheckStyle.js',
        'client/component/widget/checklist/view/ChecklistItemWidget.js',
        'client/component/widget/checklist/ChecklistItemWidgetView.js',
        'client/component/widget/image/presenter/ImageWidgetPresenter.js',
        'client/component/widget/image/view/ImageWidget.js',
        'client/component/widget/image/ImageWidgetView.js',
        'client/component/widget/image/options/ImageOption.js',
        'client/component/widget/list/presenter/ListWidgetPresenter.js',
        'client/component/widget/list/style/Indicator.js',
        'client/component/widget/list/view/ListWidget.js',
        'client/component/widget/list/ListWidgetView.js',
        'client/component/widget/text/options/TextStyle.js',
        'client/component/widget/text/options/UrlStyle.js',
        'client/component/widget/text/presenter/TextWidgetPresenter.js',
        'client/component/widget/text/view/TextWidget.js',
        'client/component/widget/text/TextWidgetView.js',
        'client/bubble/libraries.html'
    ], 'client');

    api.export("Monolith", "client");
});

Package.onTest(function(api) {
    api.use([
        'jquery',
        'ecmascript',
        'practicalmeteor:mocha',
        'practicalmeteor:chai',
        'practicalmeteor:sinon',
        'less',
        'urigo:static-templates',
        'practicalmeteor:sinon'
    ]);

    api.addFiles([
        'lib/_monolith.js',
        'client/bubble/BaseBubble.test.js',
        'client/bubble/AlertBubble.test.js',
        'client/bubble/MarkdownBubble.test.js',
        'client/bubble/ToDoListBubble.test.js',
        'client/component/BaseComponent.test.js',
        'client/component/layout/BaseLayout.test.js',
        'client/component/layout/vertical/VerticalLayoutView.test.js',
        'client/component/layout/horizontal/HorizontalLayoutView.test.js',
        'client/component/widget/BaseWidget.test.js',
        'client/component/widget/button/ButtonWidgetView.test.js',
        'client/component/widget/button/view/ButtonWidget.test.js',
        'client/component/widget/button/presenter/ButtonWidgetPresenter.test.js',
        'client/component/widget/checklist/ChecklistItemWidgetView.test.js',
        'client/component/widget/checklist/view/ChecklistItemWidget.test.js',
        'client/component/widget/checklist/presenter/ChecklistItemWidgetPresenter.test.js',
        'client/component/widget/image/ImageWidgetView.test.js',
        'client/component/widget/image/view/ImageWidget.test.js',
        'client/component/widget/image/presenter/ImageWidgetPresenter.test.js',
        'client/component/widget/list/ListWidgetView.test.js',
        'client/component/widget/list/view/ListWidget.test.js',
        'client/component/widget/list/presenter/ListWidgetPresenter.test.js',
        'client/component/widget/text/TextWidgetView.test.js',
        'client/component/widget/text/view/TextWidget.test.js',
        'client/component/widget/text/presenter/TextWidgetPresenter.test.js',
        'client/component/widget/list/style/Indicator.js',
        'client/bubble/libraries.html'
    ], 'client');

    api.addFiles(['client/test/TestIntegrazione.js',
    'client/test/TestSistema.js'], 'client');

    api.export("Monolith", "client");

});
