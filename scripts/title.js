title.$inject = [];

export function title() {
  return input => input.name || "candide";
}
