var rXHR = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject('Microsoft.XMLHTTP');

var linkSets;
var promptSets;

function reportStatus() {
    if (rXHR.readyState == 4) {
        promptSets = this.responseXML.getElementsByTagName('promptset');
        refreshBoxContents(1);
    }
}

rXHR.onreadystatechange = reportStatus;
rXHR.open("GET", "xml/prompts.xml", true);
rXHR.setRequestHeader('Content-Type', 'text/xml');
rXHR.responseType = "document";
rXHR.send(null);

function randomPrompt(page) {
    var prompts = promptSets[page].getElementsByTagName('prompt');
    var prompt = prompts[Math.floor(Math.random() * prompts.length)].childNodes[0].nodeValue;

    var box = document.getElementById("box7");
    box.children[1].innerHTML = prompt;
}
