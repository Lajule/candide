body.$inject = ["$scope", "$translate", "$filter", "$sce", "resume"];

export function body($scope, $translate, $filter, $sce, resume) {
  let vm = this;

  vm.step = 0;
  vm.mode = "default";
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

  vm.download = () => {
    $translate(["people", "education", "experiences"]).then(sections => {
      let title = $filter("title")(resume, ".pdf");
      let pdf = $filter("pdf")(resume, title, sections);

      pdf.save(title);
    });
  };

  $scope.$watch(
    "ctrl.resume",
    (newValue, oldValue) => {
      $translate(["people", "education", "experiences"]).then(sections => {
        let title = $filter("title")(resume, ".pdf");
        let pdf = $filter("pdf")(resume, title, sections);

        vm.pdf = $sce.trustAsResourceUrl(pdf.output("bloburi"));
      });
      vm.source = $filter("json")(resume);
    },
    true
  );
}
