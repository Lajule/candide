import anguar from "angular";

import { resume } from "./resume";
import { body } from "./body";
import { blob } from "./blob";
import { title } from "./title";
import { pdf } from "./pdf";
import { picker } from "./picker";
import { wysiwyg } from "./wysiwyg";
import { code } from "./code";

angular
  .module("app", [])
  .factory("resume", resume)
  .controller("body", body)
  .filter("blob", blob)
  .filter("title", title)
  .filter("pdf", pdf)
  .directive("picker", picker)
  .directive("wysiwyg", wysiwyg)
  .directive("code", code)
  .config([
    "$compileProvider",
    $compileProvider => {
      $compileProvider.aHrefSanitizationWhitelist(/^\s*(https?|ftp|mailto|chrome-extension|blob):/);
    }
  ]);
