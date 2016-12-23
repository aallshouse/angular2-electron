System.register("app/main", ["angular2/platform/browser", "angular2/core", "angular2/router", "app/app"], function($__export) {
  "use strict";
  var bootstrap,
      provide,
      ROUTER_PROVIDERS,
      APP_BASE_HREF,
      LocationStrategy,
      HashLocationStrategy,
      Application;
  return {
    setters: [function($__m) {
      bootstrap = $__m.bootstrap;
    }, function($__m) {
      provide = $__m.provide;
    }, function($__m) {
      ROUTER_PROVIDERS = $__m.ROUTER_PROVIDERS;
      APP_BASE_HREF = $__m.APP_BASE_HREF;
      LocationStrategy = $__m.LocationStrategy;
      HashLocationStrategy = $__m.HashLocationStrategy;
    }, function($__m) {
      Application = $__m.Application;
    }],
    execute: function() {
      bootstrap(Application, [ROUTER_PROVIDERS, provide(APP_BASE_HREF, {useValue: '/'}), provide(LocationStrategy, {useClass: HashLocationStrategy})]);
    }
  };
});
