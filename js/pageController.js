idle = true;
position = 1;

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, 60));
}

function getBox(boxNumber) {
    return document.getElementById("box" + boxNumber);
}

function startTimer() {
    idle = false;
    setTimeout(function() {
        idle = true;
    }, 300);
}

function checkAndStartTimer() {
    if (idle) {
        startTimer();
        return true;
    } else {
        return false;
    }
}

function togglePromptBox() {
    if (checkAndStartTimer()) {
        boxNumber = 7;
        let box = getBox(boxNumber);
    
        if (box.className != "fade_in box") {
            box.children[0].src = "images/skills/" + position + ".png";
            randomPrompt(position);
        }
    
        toggle(boxNumber);
    }
    
}

async function toggleAll() {
    if (checkAndStartTimer()) {
        refreshBoxContents(position);

        for (i = 1; i <= 3; i++) {
            await sleep(60);
            toggle(i);
        }
        for (i = 6; i >= 4; i--) {
            await sleep(60);
            toggle(i);
        }
    }
}

function toggle(boxNumber) {
    if (getBox(boxNumber).className == "fade_in box") {
        closeBox(boxNumber);
    } else {
        openBox(boxNumber);
    }
}

function openBox(boxNumber) { 
    let box = getBox(boxNumber);

    box.style.backgroundImage = "url('images/page " + position + "/" + boxNumber + ".gif')";
    box.className = "fade_in box"; 
    box.style.display = "flex"; 
}

function closeBox(boxNumber) { 
    let box = getBox(boxNumber);

    box.className = "fade_out box"; 
    
    setTimeout(function() {
        box.style.display = "none";
    }, 300); 
}

async function closeAll() {
    for (i = 1; i <= 3; i++) {
        await sleep(60);
        closeBox(i);
    }
    for (i = 6; i >= 4; i--) {
        await sleep(60);
        closeBox(i);
    }
    closeBox(7);
}

function prevPage() {
    if (checkAndStartTimer() && position != 0) {
        closeAll();

        if (position == 1) {
            document.getElementById("cont2").className = "container middle_to_left red";
        } else if (position == 2) {
            document.getElementById("cont2").className = "container right_to_middle purple";
        }

        position--;

        setTimeout(function() {
            toggleAll();
        }, 500);
    }
}

function nextPage() {
    if (checkAndStartTimer() && position != 2) {
        closeAll();
        
        if (position == 0) {
            document.getElementById("cont2").className = "container left_to_middle purple";
        } else if (position == 1) {
            document.getElementById("cont2").className = "container middle_to_right blue";
        }
        
        position++;

        setTimeout(function() {
            toggleAll();
        }, 500);
    }
}