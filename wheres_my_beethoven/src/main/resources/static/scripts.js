    function loadContent(buttonId, containerId) {
        var button = document.getElementById(buttonId);
        var container = document.getElementById(containerId);
        console.log("loadContent")
    
        button.addEventListener('click', function() {
        fetch('./findconcert.html')
            .then(response => response.text())
            .then(html => {
            container.innerHTML = html;
            });
        });
    }