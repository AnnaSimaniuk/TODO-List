//функціонал іконок

import {importantBlock, putOff} from "./localStorage.js";
import {addItem} from "./funcNewList.js";
import {setAtr} from "./setId.js";

document.body.addEventListener('click', e => {
    const closestBlock = e.target.closest('.main_task__item');


    if (e.target.classList.contains('icon_save')) {
        const itemContent = closestBlock.children[2].firstElementChild;
        const inputValue = e.target.previousElementSibling;

        itemContent.textContent = inputValue.value;
        closestBlock.classList.add('save');
        closestBlock.setAttribute('draggable', 'true');
    }

    if (e.target.classList.contains('icon_edit')) {
        const itemContent = closestBlock.children[2].firstElementChild.textContent;
        let inputValue = closestBlock.children[1].firstElementChild;

        inputValue.value = itemContent;
        closestBlock.classList.remove('save');
        closestBlock.removeAttribute('draggable');
    }

    if (e.target.classList.contains('empty_square')) {
        closestBlock.classList.toggle('done');
    }

    if (e.target.classList.contains('icon_important')) {
        const itemContent = closestBlock.children[2].firstElementChild;
        importantBlock.insertAdjacentHTML('beforeend', addItem(false, true, false, itemContent.textContent))
        setAtr();
        closestBlock.remove();
    }

    if (e.target.classList.contains('icon_clock')) {
        const itemContent = closestBlock.children[2].firstElementChild;
        putOff.insertAdjacentHTML('beforeend', addItem(false, false, true, itemContent.textContent))
        setAtr();
        closestBlock.remove();
    }
})
