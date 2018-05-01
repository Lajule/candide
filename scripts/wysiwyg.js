import tinymce from "tinymce/tinymce";
import "tinymce/themes/modern/theme";
import "tinymce/plugins/paste";
import "tinymce/plugins/link";

wysiwyg.$inject = [];

export function wysiwyg() {
  return {
    require: "ngModel",
    link: function(scope, element, attrs, ngModel) {
      tinymce
        .init({
          target: element[0],
          plugins: ["paste", "link"]
        })
        .then(([editor]) => {
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
}
