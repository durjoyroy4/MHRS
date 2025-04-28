function showPrescription() {
    const pdfViewer = document.getElementById("pdf-viewer");
    pdfViewer.src = "p.jpg"; // path to your prescription PDF
    pdfViewer.style.display = "block"; // show the prescription PDF
    document.querySelector(".report-images").style.display = "none"; // Hide reports section
    document.getElementById("about").style.display = "none"; // Hide about section
  }

  function showReports() {
    const pdfViewer = document.getElementById("pdf-viewer");
    pdfViewer.style.display = "none"; // Hide prescription PDF
    document.querySelector(".report-images").style.display = "flex"; // Show reports section
    document.getElementById("about").style.display = "none"; // Hide about section
  }

  function showAbout() {
    const pdfViewer = document.getElementById("pdf-viewer");
    pdfViewer.style.display = "none"; // Hide prescription PDF
    document.querySelector(".report-images").style.display = "none"; // Hide reports section
    document.getElementById("about").style.display = "block"; // Corrected this line
  }