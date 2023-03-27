function loadContent(buttonId, containerId, url) {
    var button = document.getElementById(buttonId);
    var container = document.getElementById(containerId);
  
      fetch(url)
        .then(response => response.text())
        .then(html => {
          container.innerHTML = html;
          addEventListeners(); // <-- call the function here
        });
  }

  function fetchAndDisplayContent() {
    fetch(url)
      .then(response => response.text())
      .then(html => {
        container.innerHTML = html;
      });
  }

  document.addEventListener('DOMContentLoaded', function() {
    // Add event listeners for all menu buttons
    var container = document.getElementById('mainpane');
    var url = 'about.html'
      fetch(url)
        .then(response => response.text())
        .then(html => {
          container.innerHTML = html;
          addEventListeners(); // <-- call the function here
        });
  });