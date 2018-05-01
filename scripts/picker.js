import flatpickr from "flatpickr";

picker.$inject = [];

export function picker() {
  return {
    scope: {
      format: "@"
    },
    link: (scope, element, attrs) => {
      flatpickr(element[0], { dateFormat: scope.format });
    }
  };
}
