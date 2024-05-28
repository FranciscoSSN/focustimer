import state from './state.js';
import * as timer from './timer.js';
import * as el from './elements.js';
import * as sounds from './sounds.js';

export function ToggleRunning() {
    state.isRunning = document.documentElement.classList.toggle('running');

    timer.countDown();

    sounds.buttonPressAudio.play();
}

export function set() {
    el.minutes.setAttribute('contenteditable', true);
    el.minutes.focus();
}

export function reset() {
    state.isRunning = false
    document.documentElement.classList.toggle('running');
    timer.updateDisplay();

    sounds.buttonPressAudio.play();
}

export function ToggleMusic() {
    state.isMusic = document.documentElement.classList.toggle('music-on');

    if(state.isMusic) {
        sounds.bgAudio.play();
        return
    }

    sounds.bgAudio.pause();
}