blob.$inject = [];

export function blob() {
  return input => {
    let file = new Blob([input], { type: "application/json" });
    return URL.createObjectURL(file);
  };
}
