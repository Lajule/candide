import { resumeService } from "./service";
import { resumeController } from "./controller";

angular
  .module("resumeApp", [])
  .factory("resumeService", resumeService)
  .controller("resumeController", resumeController)
  .config([
    "$compileProvider",
    $compileProvider => {
      $compileProvider.aHrefSanitizationWhitelist(/^\s*(https?|ftp|mailto|chrome-extension|blob):/);
    }
  ])
  .filter("blob", () => {
    return input => {
      let file = new Blob([input], { type: "application/json" });
      return URL.createObjectURL(file);
    };
  })
  .directive("flatpickr", () => {
    return {
      scope: {
        format: "@"
      },
      link: (scope, element, attrs) => {
        flatpickr(element[0], { dateFormat: scope.format });
      }
    };
  })
  .directive("tinymce", () => {
    return {
      require: "ngModel",
      link: function(scope, element, attrs, ngModel) {
        tinymce.init({ target: element[0] }).then(([editor]) => {
          editor.on("change", () => {
            ngModel.$setViewValue(editor.getContent());
          });

          ngModel.$render = () => {
            editor.setContent(ngModel.$viewValue);
          };
        });

        scope.$on("$destroy", () => {
          tinymce.remove(element[0]);
        });
      }
    };
  })
  .directive("codemirror", () => {
    return {
      require: "ngModel",
      link: (scope, element, attrs, ngModel) => {
        let editor = CodeMirror.fromTextArea(element[0], {
          lineNumbers: true,
          mode: "application/json"
        });

        editor.on("change", () => {
          ngModel.$setViewValue(editor.getValue());
        });

        ngModel.$render = () => {
          editor.setValue(ngModel.$viewValue);
        };
      }
    };
  });
