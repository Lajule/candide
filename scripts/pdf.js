import jsPDF from "jspdf";

pdf.$inject = ["resume"];

function newPage(pdf, title) {
  pdf.setFillColor(155, 77, 202);
  pdf.rect(0, 0, 210, 20, "F");
  pdf.rect(0, 287, 210, 10, "F");
  pdf.rect(0, 0, 10, 297, "F");
  pdf.rect(200, 0, 10, 297, "F");

  let logo = document.querySelector(".logo");
  let canvas = document.createElement("canvas");
  canvas.width = logo.naturalWidth;
  canvas.height = logo.naturalHeight;
  canvas.getContext("2d").drawImage(logo, 10, 10);
  pdf.addImage(canvas.toDataURL("image/png"), "JPEG", 190, 277, 10, 10);

  pdf.setFontType("normal");
  pdf.setFontSize(22);
  pdf.text(105, 12, title, null, null, "center");
}

export function pdf(resume) {
  return (input, title, { people, education, experiences }) => {
    let pdf = new jsPDF();

    pdf.setProperties({ title });

    newPage(pdf, people.toString());

    pdf.setFontType("bold");
    pdf.setFontSize(22);
    pdf.text(15, 32, resume.name);

    pdf.setFontType("normal");
    pdf.setFontSize(18);
    pdf.text(15, 48, resume.title);

    pdf.fromHTML(resume.skills, 15, 56, { width: 145 });

    pdf.addPage();

    for (let i = 0; i < resume.degrees.length; ++i) {
      let degree = resume.degrees[i];

      newPage(pdf, education.toString());

      pdf.setFontType("bold");
      pdf.setFontSize(22);
      pdf.text(15, 32, `${degree.school} - ${degree.year}`);

      pdf.fromHTML(degree.name, 15, 48, { width: 145 });

      pdf.addPage();
    }

    for (let i = 0; i < resume.experiences.length; ++i) {
      let experience = resume.experiences[i];

      if (i > 0) {
        pdf.addPage();
      }

      newPage(pdf, experiences.toString());

      pdf.setFontType("bold");
      pdf.setFontSize(22);
      pdf.text(15, 32, `${experience.firm} - ${experience.client}`);

      pdf.setFontType("bolditalic");
      pdf.setFontSize(14);
      pdf.text(15, 44, `${experience.from} - ${experience.to}`);

      pdf.setFontType("normal");
      pdf.setFontSize(18);
      pdf.text(15, 56, experience.description);

      pdf.fromHTML(experience.mission, 15, 78, { width: 145 });
    }

    return pdf;
  };
}
