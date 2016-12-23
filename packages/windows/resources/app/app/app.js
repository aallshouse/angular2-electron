System.register("app/app", ["angular2/core"], function($__export) {
  "use strict";
  var Component,
      Application;
  return {
    setters: [function($__m) {
      Component = $__m.Component;
    }],
    execute: function() {
      Application = function() {
        function Application() {}
        return ($traceurRuntime.createClass)(Application, {}, {});
      }();
      $__export("Application", Application);
      Object.defineProperty(Application, "annotations", {get: function() {
          return [new Component({
            selector: 'sb-app',
            template: '<h1>Our app running properly now</h1>'
          })];
        }});
    }
  };
});
