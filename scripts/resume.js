resume.$inject = [];

export function resume() {
  return {
    name: "",
    title: "",
    skills:
      "<div></div>",
    degrees: [
      {
        school: "",
        year: "",
        name: ""
      }
    ],
    experiences: [
      {
        firm: "",
        client: "",
        from: "",
        to: "",
        description: "",
        mission:
          "<div></div>"
      }
    ]
  };
}
