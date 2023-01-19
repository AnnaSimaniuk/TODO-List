//створення списку

import {addItem} from "./funcNewList.js";
import {setAtr} from "./setId.js";

export const mainTaskItems = document.querySelector('.main_task__items');

for (let i = 0; i < 10; i++) {
    mainTaskItems.insertAdjacentHTML('beforeend', `${addItem(true)}`)
    setAtr();
}