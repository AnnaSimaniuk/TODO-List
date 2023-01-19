//Drag and Drop
import {importantBlock, putOff} from "./localStorage.js";
import {mainTaskItems} from "./createList.js";

const impBlock = document.querySelector('.important__wrapper');
const putBlock = document.querySelector('.put_off__wrapper');
const mainTask = document.querySelector('.main_task');


document.body.addEventListener('dragstart', e => {
    if (e.target.classList.contains('main_task__item')) {
        e.target.classList.add("dragging");
        e.dataTransfer.clearData();
        e.dataTransfer.setData("text/plain", e.target.id);
    }
})
document.body.addEventListener("dragend", e => {
    if (e.target.classList.contains('main_task__item')) {
        e.target.classList.remove("dragging")
    }
})


impBlock.addEventListener('dragover', e => e.preventDefault())
putBlock.addEventListener('dragover', e => e.preventDefault())
mainTask.addEventListener('dragover', e => e.preventDefault())

function drop (e, place) {
    e.preventDefault();
    const data = e.dataTransfer.getData("text");
    const source = document.getElementById(data);
    place.appendChild(source);
}

impBlock.addEventListener('drop', e => drop(e,importantBlock))
putBlock.addEventListener('drop', e => drop(e,putOff))
mainTask.addEventListener('drop', e => drop(e,mainTaskItems))