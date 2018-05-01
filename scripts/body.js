import jsPDF from "jspdf";

body.$inject = ["$scope", "$timeout", "$sce", "$filter", "resume"];

export function body($scope, $timeout, $sce, $filter, resume) {
  let vm = this;

  vm.resume = resume;

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

      pdf.setProperties({
        title: $filter("title")(resume) + '.pdf'
      });
      pdf.text(15, 15, resume.name);
      pdf.text(15, 30, resume.title);
      pdf.fromHTML(resume.skills, 15, 45, { width: 170 });

      vm.source = $filter("json")(resume);
      vm.pdf = $sce.trustAsResourceUrl(pdf.output("bloburi"));
    },
    true
  );
}
