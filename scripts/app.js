import anguar from "angular";
import "angular-translate";

import { resume } from "./resume";
import { body } from "./body";
import { blob } from "./blob";
import { title } from "./title";
import { pdf } from "./pdf";
import { picker } from "./picker";
import { wysiwyg } from "./wysiwyg";
import { code } from "./code";
import { en, fr } from "./lang";

angular
  .module("app", ["pascalprecht.translate"])
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
    "$translateProvider",
    ($compileProvider, $translateProvider) => {
      $compileProvider.aHrefSanitizationWhitelist(/^\s*(https?|ftp|mailto|chrome-extension|blob):/);
      $translateProvider
        .translations("en", en)
        .translations("fr", fr)
        .useSanitizeValueStrategy("sce")
        .preferredLanguage("fr");
    }
  ]);
