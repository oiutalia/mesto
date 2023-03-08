// Находим форму в DOM
const popupElement = document.querySelector('.popup');
const buttonEditOpen = document.querySelector ('.profile__edit-button');
const buttonClose = document.querySelector ('.popup__edit-button');

const getName = document.querySelector ('.profile__name');
const getJob = document.querySelector ('.profile__description');

let formElement = document.querySelector ('.popup__container');
let nameInput = formElement.querySelector ('.popup__input-name');
let jobInput = formElement.querySelector ('.popup__input-job');



function openPopup () {
    popupElement.classList.add('popup__opend');
    nameInput.value = getName.textContent;
    jobInput.value = getJob.textContent;
}
  

function closePopup () {
  popupElement.classList.remove ('popup__opend');
}


function handleFormSubmit (evt) {
    evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
    getName.textContent = `${nameInput.value}`;
    getJob.textContent = `${jobInput.value}`;                                   

}


buttonEditOpen.addEventListener('click', openPopup);
buttonClose.addEventListener('click', closePopup);
formElement.addEventListener('submit', handleFormSubmit); 