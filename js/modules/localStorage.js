//local storage
import {mainTaskItems} from "./createList.js";
import {addItem} from "./funcNewList.js";
import {setAtr} from "./setId.js";
import {dateContent} from "./date.js";

export const importantBlock = document.querySelector('.important');
export const putOff = document.querySelector('.put_off');

let tasksLs = localStorage.getItem('tasks');
let importantLs = localStorage.getItem('important');
let postponeLs = localStorage.getItem('postponed');

let tasksArr = JSON.parse(tasksLs);
let importantArr = JSON.parse(importantLs);
let postponedArr = JSON.parse(postponeLs);

export function getLocalSt() {
    let index=0;
    tasksArr.forEach((el) => {
        if (!(el === '')) {
            const tasksItems = Array.from(mainTaskItems.children);
            const itemContent = tasksItems[index].children[2].firstElementChild;
            itemContent.textContent = el;
            tasksItems[index].classList.add('save')
            index++;
            if (index>9) {
                mainTaskItems.insertAdjacentHTML('beforeend', `${addItem(true,false,false,el)}`);
                setAtr();
            }
        }
    })

    importantArr.forEach(el => {
        if ((importantArr.length > 0) && !(el === '')) {
            importantBlock.insertAdjacentHTML('beforeend', addItem(false, true, false, el))
            setAtr();
        }
    })

    postponedArr.forEach(el => {
        if ((postponedArr.length > 0) && !(el === '')) {
            putOff.insertAdjacentHTML('beforeend', addItem(false, false, true, el))
            setAtr();
        }
    })

    dateContent.textContent = localStorage.getItem('date');

    const saveArr = document.querySelectorAll('.save');
    saveArr.forEach(el=>el.setAttribute('draggable', 'true'));
}

//localStorage внесення даних перед покиданням сторінки
window.addEventListener("unload", () => {
    let tasksArr = [];
    let importantArr = [];
    let postponedArr = [];
    let date = dateContent.textContent;

    for (const item of mainTaskItems.children) {
        if (!item.classList.contains('done')) {
            const itemContent = item.children[2].firstElementChild;
            tasksArr.push(itemContent.textContent);
        } else {
            tasksArr.push('');
        }
    }

    for (const item of importantBlock.children) {
        if (!item.classList.contains('done')) {
            const itemContent = item.children[2].firstElementChild;
            importantArr.push(itemContent.textContent);
        } else {
            importantArr.push('');
        }
    }

    for (const item of putOff.children) {
        if (!item.classList.contains('done')) {
            const itemContent = item.children[2].firstElementChild;
            postponedArr.push(itemContent.textContent);
        } else {
            postponedArr.push('');
        }
    }

    localStorage.setItem('tasks', JSON.stringify(tasksArr));
    localStorage.setItem('important', JSON.stringify(importantArr));
    localStorage.setItem('postponed', JSON.stringify(postponedArr));
    localStorage.setItem('date', date);
});
