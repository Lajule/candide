resume.$inject = [];

export function resume() {
  return {
    name: "John D",
    title: "Consultant",
    skills: "<p style=\"text-align: center;\"><strong>Expert</strong></p>\n<p><strong>Languages:</strong> Tous</p>\n<p><strong>M&eacute;htodes:</strong> Toutes</p>\n<p style=\"text-align: left;\">&nbsp;</p>",
    degrees: [
      {
        school: "Polytechnique PARIS",
        year: "1998",
        name: "Dipôme de l'école Polytechnique"
      }
    ],
    experiences: [
      {
        firm: "Capgemini",
        client: "Bouygues Telecom",
        from: "2004-05",
        to: "2018-04",
        description: "Membre de l'équipe SI Entreprise",
        mission: "<p>D&eacute;veloppment C/C++/Java/ksh</p>\n<p>R&eacute;daction de sp&eacute;cifications</p>\n<p>Tests d'int&eacute;gration</p>"
      }
    ]
  };
}
