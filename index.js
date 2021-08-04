const availableRates = [0.5, 1, 1.5, 2, 3]

const interval = setInterval( () => {
    header = getHeader();
    if (header) {
        clearInterval(interval);
        addButton(header);
        listenClick();
    }
}, 1000)

function getHeader() {
    const header = document.querySelector('._1QUKR');
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
    setTextButton(button, 1);
    button.setAttribute('data-rate', 1);
    button.setAttribute('id', 'faster-audio-btn')
    return button;
}

function addEventsButton(button){
    button.addEventListener('click', function(){
        button.setAttribute('data-rate', toggleRate(button.getAttribute('data-rate')));
        rate = parseFloat(button.getAttribute('data-rate'));
        setTextButton(button, rate);
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

function toggleRate(rate) {
    console.log(rate);
    for (var i=0; i<availableRates.length; i++) {
        if (rate == availableRates[i]) {
            i++;
            if (i >= availableRates.length) i=0;
            return availableRates[i];
        }
    }
    return false;
}

function setTextButton(button, rate) {
    button.innerHTML = rate.toString() + "x";
}
