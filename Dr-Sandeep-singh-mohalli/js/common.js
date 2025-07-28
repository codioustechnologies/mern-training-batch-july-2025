function loadHTML(elementId, file) {
  fetch(file)
    .then(response => {
      if (!response.ok) throw new Error(`Error loading ${file}`);
      return response.text();
    })
    .then(data => {
      document.getElementById(elementId).innerHTML = data;
    })
    .catch(error => console.error(error));
}

// Load header and footer
window.addEventListener('DOMContentLoaded', () => {
  loadHTML("header-container", "header.html");
  loadHTML("footer-container", "footer.html");
});
