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
        .translations("en", {
          subtitle: "Generate your PDF resume",
          new: {
            label: "New",
            tooltip: "Clear all data !"
          },
          save: {
            label: "Save",
            tooltip: "Save data to a file"
          },
          download: {
            label: "Download",
            tooltip: "Download your PDF resume"
          }
        })
        .translations("fr", {
          subtitle: "Générez votre CV au format PDF",
          new: {
            label: "Nouveau",
            tooltip: "Tout effacer !"
          },
          save: {
            label: "Enregistrer",
            tooltip: "Sauvegarde les données dans un fichier"
          },
          download: {
            label: "Télécharger",
            tooltip: "Récupére votre CV en pdf"
          }
        })
        .preferredLanguage("fr");
    }
  ]);
