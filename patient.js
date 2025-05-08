function showPrescription() {
  document.getElementById('pdf-viewer').style.display = 'block';
  document.querySelector('.report-images').style.display = 'none';
  document.querySelector('.prescription-images').style.display = 'none';
  document.getElementById('about').style.display = 'none';
}

function showReports() {
  document.getElementById('pdf-viewer').style.display = 'none';
  document.querySelector('.report-images').style.display = 'flex';
  document.querySelector('.prescription-images').style.display = 'none';
  document.getElementById('about').style.display = 'none';
}

function showAllPrescription() {
  document.getElementById('pdf-viewer').style.display = 'none';
  document.querySelector('.report-images').style.display = 'none';
  document.querySelector('.prescription-images').style.display = 'flex';
  document.getElementById('about').style.display = 'none';
}

function showAbout() {
  document.getElementById('pdf-viewer').style.display = 'none';
  document.querySelector('.report-images').style.display = 'none';
  document.querySelector('.prescription-images').style.display = 'none';
  document.getElementById('about').style.display = 'block';
}
