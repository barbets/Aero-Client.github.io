var xhttp8 = new XMLHttpRequest();
xhttp8.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 404) {
        var image = document.getElementById('launchButton');
        image.src = "images/launch/servererror.png";
    }
};
xhttp8.open("GET", "https://github.com/Aero-Client/Aero-Client.github.io/blob/master/update.js", true);
xhttp8.send();
