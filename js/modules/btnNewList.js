//кнопка додання таску
import {addItem} from "./funcNewList.js";
import {mainTaskItems} from "./createList.js";
import {setAtr} from "./setId.js";

const addNewItem = document.querySelector('.btn');

addNewItem.addEventListener('click', () => {
    mainTaskItems.insertAdjacentHTML('beforeend', `${addItem(true)}`);
    setAtr();
})