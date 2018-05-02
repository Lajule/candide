title.$inject = [];

export function title() {
  return (input, prefix) => (input.name || "candide") + prefix;
}
