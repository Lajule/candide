import CodeMirror from "codemirror";
import "codemirror/mode/javascript/javascript";

code.$inject = [];

export function code() {
  return {
    require: "ngModel",
    link: (scope, element, attrs, ngModel) => {
      let editor = CodeMirror.fromTextArea(element[0], {
        lineNumbers: true,
        lineWrapping: true,
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
}
