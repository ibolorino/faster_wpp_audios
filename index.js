const interval = setInterval( () => {
    header = getHeader();
    if (header) {
        clearInterval(interval);
        addButton(header);
        listenClick();
    }
}, 1000)

function getHeader() {
    const header = document.querySelector('._3auIg');
    return header;
}

function addButton(elem) {
    button = createButton();
    addEventsButton(button);
    elem.appendChild(button);
    return false;
}

function createButton() {
    const button = document.createElement('button');
    button.innerHTML = "2x";
    button.setAttribute('data-rate', 1);
    button.setAttribute('id', 'faster-audio-btn')
    return button;
}

function addEventsButton(button){
    button.addEventListener('click', function(){
        button.classList.toggle('active');
        button.setAttribute('data-rate', toggleValue(button.getAttribute('data-rate'), 2, 1));
        rate = parseFloat(button.getAttribute('data-rate'));
        audios = document.querySelectorAll('audio');
        setAudiosRate(audios, rate);
    });
}

function setAudiosRate(audios, rate) {
    for (audio of audios) {
        audio.playbackRate = rate;
        audio.defaultPlaybackRate = rate;
    }
}

function listenClick() {
    window.addEventListener('click', function(e){
        clickTarget = e.target.getAttribute('data-icon');
        if (clickTarget == 'audio-play') {
            globalRate = document.getElementById('faster-audio-btn').getAttribute('data-rate');
            audios = document.querySelectorAll('audio');
            setAudiosRate(audios, rate);
        }
    });
}


function toggleValue(attr, val1, val2) {
    attr = attr == val1 ? val2 : val1;
    return attr;
}