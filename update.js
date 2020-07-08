var xhttp9 = new XMLHttpRequest();
xhttp9.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 404) {
        var image = document.getElementById('launchButton');
        image.src = "images/launch/servererror.png";
    }
};
xhttp9.open("GET", "https://github.com/Aero-Client/Aero-Client.github.io/blob/master/remotebackend.j", true);
xhttp9.send();
