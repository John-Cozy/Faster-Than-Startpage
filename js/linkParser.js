var oXHR = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject('Microsoft.XMLHTTP');

var linkSets;

function reportStatus() {
    if (oXHR.readyState == 4) {
        linkSets = this.responseXML.getElementsByTagName('linkset');
        refreshBoxContents(1);
    }
}

oXHR.onreadystatechange = reportStatus;
oXHR.open("GET", "xml/links.xml", true);
oXHR.setRequestHeader('Content-Type', 'text/xml');
oXHR.responseType = "document";
oXHR.send(null);

function refreshBoxContents(page) {
    var boxList = linkSets[page].getElementsByTagName('box');

    for (var i = 0; i < boxList.length; i++) {
        var box = document.getElementById("box" + (i + 1));
        box.innerHTML = "";

        var linkList = boxList[i].getElementsByTagName("link");
        var ul = document.createElement('ul');

        for (var j = 0; j < linkList.length; j++) {
            var a = document.createElement('a');
            a.href = linkList[j].getElementsByTagName("url")[0].childNodes[0].nodeValue;
            a.innerHTML = linkList[j].getElementsByTagName("name")[0].childNodes[0].nodeValue
            
            var li = document.createElement('li');
            li.appendChild(a);
            ul.appendChild(li);
        }

        box.appendChild(ul);
    }
}

function randomPrompt(page) {
    var prompts = promptSets[page].getElementsByTagName('prompt');
    var prompt = prompts[Math.floor(Math.random() * prompts.length)];

    var box = document.getElementById("box7");
    box.children[1].innerHTML = prompt;
}
