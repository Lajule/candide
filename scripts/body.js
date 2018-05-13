body.$inject = ["$scope", "$timeout", "$filter", "$sce", "resume"];

export function body($scope, $timeout, $filter, $sce, resume) {
  let vm = this;

  vm.step = 0;
  vm.mode = "default";
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
    resume.degrees.push({ school: "", year: "", name: "<div></div>" });
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

  vm.download = () => {
    let title = $filter("title")(resume, ".pdf");
    let pdf = $filter("pdf")(resume, title);
    pdf.save(title);
  };

  $scope.$watch(
    "ctrl.resume",
    (newValue, oldValue) => {
      let title = $filter("title")(resume, ".pdf");
      let pdf = $filter("pdf")(resume, title);

      vm.source = $filter("json")(resume);
      vm.pdf = $sce.trustAsResourceUrl(pdf.output("bloburi"));
    },
    true
  );
}
