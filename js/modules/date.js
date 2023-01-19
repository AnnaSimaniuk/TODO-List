//date
const dateInput = document.querySelector('.date__input');
export const dateContent = document.querySelector('.date__content');

dateInput.addEventListener('change', () => {
    dateContent.textContent = dateInput.value;
})