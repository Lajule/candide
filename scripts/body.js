import jsPDF from "jspdf";

body.$inject = ["$scope", "$timeout", "$sce", "$filter", "resume"];

export function body($scope, $timeout, $sce, $filter, resume) {
  let vm = this;

  vm.mode = "formulaire";

  vm.resume = resume;

  vm.switch = () => {
    vm.mode = vm.mode === "formulaire" ? "source" : "formulaire";
  };

  vm.reset = () => {
    resume.name = "";
    resume.title = "";
    resume.skills = "";
    resume.degrees = [];
    vm.addDegree();
    resume.experiences = [];
    vm.addExperience();
  };

  vm.addDegree = () => {
    resume.degrees.push({ school: "", year: "", name: "" });
  };

  vm.removeDegree = index => {
    resume.degrees.splice(index, 1);
  };

  vm.addExperience = () => {
    resume.experiences.push({
      firm: "",
      client: "",
      from: "",
      to: "",
      description: "",
      mission: ""
    });
  };

  vm.removeExperience = index => {
    resume.experiences.splice(index, 1);
  };

  vm.updateSource = () => {
    try {
      let source = JSON.parse(vm.source);
      Object.keys(source).forEach(k => {
        resume[k] = source[k];
      });
    } catch (e) {}
  };

  $scope.$watch(
    "ctrl.resume",
    (newValue, oldValue) => {
      let pdf = new jsPDF("portrait", "mm", "a4");
      let height = 15;

      pdf.setProperties({
        title: $filter("title")(resume, ".pdf")
      });

      pdf.text(15, height, resume.name);
      height += 15;

      pdf.text(15, height, resume.title);
      height += 15;

      pdf.fromHTML(resume.skills, 15, height, { width: 170 });
      height += 50;

      for (let i = 0; i < resume.degrees.length; ++i) {
        let degree = resume.degrees[i];

        pdf.text(15, height, `${degree.school} - ${degree.year}`);
        height += 15;

        pdf.text(15, height, degree.name);
        height += 15;
      }

      for (let i = 0; i < resume.experiences.length; ++i) {
        let experience = resume.experiences[i];

        pdf.text(15, height, `${experience.firm} - ${experience.client}`);
        height += 15;

        pdf.text(15, height, `${experience.from} - ${experience.to}`);
        height += 15;

        pdf.text(15, height, experience.description);
        height += 15;

        pdf.fromHTML(experience.mission, 15, height, { width: 170 });
        height += 50;
      }

      vm.source = $filter("json")(resume);
      vm.pdf = $sce.trustAsResourceUrl(pdf.output("bloburi"));
    },
    true
  );
}
