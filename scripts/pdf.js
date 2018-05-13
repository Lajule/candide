import jsPDF from "jspdf";

pdf.$inject = ["resume"];

export function pdf(resume, title) {
  return input => {
    let pdf = new jsPDF("portrait", "mm", "a4");

    pdf.setProperties({ title });

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

      pdf.fromHTML(degree.name, 15, height, { width: 155 });
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

    return pdf;
  };
}
