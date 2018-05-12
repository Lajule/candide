import jsPDF from "jspdf";

body.$inject = ["$scope", "$timeout", "$sce", "$filter", "resume"];

export function body($scope, $timeout, $sce, $filter, resume) {
  let vm = this;

  vm.step = 0;
  vm.preview = true;
  vm.resume = resume;

  vm.reset = () => {
    resume.name = "";
    resume.title = "";
    resume.skills = "<div></div>";
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
      mission: "<div></div>"
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

      pdf.setProperties({
        title: $filter("title")(resume, ".pdf")
      });

      pdf.text(15, 15, resume.name);
      pdf.text(15, 30, resume.title);
      pdf.fromHTML(resume.skills, 15, 45, { width: 155 });
      pdf.addPage();

      let height = 15;

      pdf.text(15, height, "Formation");
      height += 15;

      for (let i = 0; i < resume.degrees.length; ++i) {
        let degree = resume.degrees[i];

        if (height >= 295) {
          pdf.addPage();
          height = 15;
        }

        pdf.text(15, height, `${degree.school} - ${degree.year}`);
        height += 15;

        pdf.text(15, height, degree.name);
        height += 15;
      }
      pdf.addPage();

      height = 15;
 
      pdf.text(15, height, "Epériences");
      height += 15;

      for (let i = 0; i < resume.experiences.length; ++i) {
        let experience = resume.experiences[i];

        if (height >= 295) {
          pdf.addPage();
          height = 15;
        }

        pdf.text(15, height, `${experience.firm} - ${experience.client}`);
        height += 15;

        pdf.text(15, height, `${experience.from} - ${experience.to}`);
        height += 15;

        pdf.text(15, height, experience.description);
        height += 15;

        pdf.fromHTML(experience.mission, 15, height, { width: 155 });
        height += 150;
      }
      pdf.addPage();

      vm.source = $filter("json")(resume);
      vm.pdf = $sce.trustAsResourceUrl(pdf.output("bloburi"));
    },
    true
  );
}
