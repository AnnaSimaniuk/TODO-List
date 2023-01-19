//функція додання таску для різних блоків

export function addItem(main, important, putOff, itemContent) {
    if (main) {
        return `<div class="main_task__item">
                <span class="empty_square"></span>
                <div class="front_side">
                    <input class="front_side__input" type="text">
                    <span class="icon_save"></span>
                </div>
                <div class="back_side">
                    <p class="back_side__content"></p>
                    <span class="icon__wrapper">
                    <span class="icon_edit"></span>
                    <span class="icon_important"></span>
                    <span class="icon_clock"></span>
                    </span>
                </div>
            </div>`
    } else if (important) {
        return `<div class="main_task__item save" draggable="true">
                <span class="empty_square"></span>
                <div class="front_side">
                    <input class="front_side__input" type="text">
                    <span class="icon_save"></span>
                </div>
                <div class="back_side">
                    <p class="back_side__content">${itemContent}</p>
                    <span class="icon__wrapper">
                    <span class="icon_edit"></span>
                    <span class="icon_clock"></span>
                    </span>
                </div>
            </div>`
    } else if (putOff) {
        return `<div class="main_task__item save" draggable="true">
                <span class="empty_square"></span>
                <div class="front_side">
                    <input class="front_side__input" type="text">
                    <span class="icon_save"></span>
                </div>
                <div class="back_side">
                    <p class="back_side__content">${itemContent}</p>
                    <span class="icon__wrapper">
                     <span class="icon_edit"></span>
                    <span class="icon_important"></span>
                    </span>
                </div>
            </div>`
    }
}
