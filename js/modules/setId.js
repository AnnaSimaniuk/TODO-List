let counter = Date.now();

export function setAtr() {
    const taskArr = document.querySelectorAll('.main_task__item');
    taskArr.forEach(el => {
        el.setAttribute('id', `${counter}`);
        counter++;
    })
}