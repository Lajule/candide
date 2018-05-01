resume.$inject = [];

export function resume() {
  return {
    name: "",
    title: "",
    skills: "",
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
        mission: ""
      }
    ]
  };
}
