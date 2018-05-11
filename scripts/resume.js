resume.$inject = [];

export function resume() {
  return {
    name: "Harry P.",
    title: "Magician",
    skills:
      "<p>Miscellaneous spells</p>",
    degrees: [
      {
        school: "Hogwarts School of Witchcraft and Wizardry",
        year: "1998",
        name: "Gryffindor"
      }
    ],
    experiences: [
      {
        firm: "Capgemini",
        client: "Bouygues Telecom",
        from: "2004-05",
        to: "2018-04",
        description: "Membre de l'équipe SI Entreprise",
        mission:
          "<p>Kill spells</p>"
      }
    ]
  };
}
