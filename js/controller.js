resumeController.$inject = ["$scope", "$timeout", "$sce", "$filter", "resumeService"];

export function resumeController($scope, $timeout, $sce, $filter, resumeService) {
  let vm = this;

  vm.resumeService = resumeService;

  vm.reset = () => {
    resumeService.name = '';
    resumeService.title = '';
    resumeService.skills = '';
    resumeService.degrees = [];
    vm.addDegree();
    resumeService.experiences = [];
    vm.addExperience();
  };

  vm.addDegree = () => {
    resumeService.degrees.push({ school: "", year: "", name: "" });
  };

  vm.removeDegree = index => {
    resumeService.degrees.splice(index, 1);
  };

  vm.addExperience = () => {
    resumeService.experiences.push({
      firm: "",
      client: "",
      from: "",
      to: "",
      description: "",
      mission: ""
    });
  };

  vm.removeExperience = index => {
    resumeService.experiences.splice(index, 1);
  };

  vm.updateSource = () => {
    try {
      let source = JSON.parse(vm.source);
      Object.keys(source).forEach(k => {
        resumeService[k] = source[k];
      });
    } catch (e) {}
  };

  $scope.$watch(
    "ctrl.resumeService",
    (newValue, oldValue) => {
      let pdf = new jsPDF("portrait", "mm", "a4");

      pdf.text(15, 15, resumeService.name);
      pdf.text(15, 30, resumeService.title);
      pdf.fromHTML(resumeService.skills, 15, 45, { width: 170 });

      vm.source = $filter("json")(resumeService);
      vm.pdf = $sce.trustAsResourceUrl(pdf.output("bloburi"));
    },
    true
  );
}
