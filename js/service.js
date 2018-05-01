resumeService.$inject = [];

export function resumeService() {
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
