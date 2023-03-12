// Находим форму в DOM
const popupElement = document.querySelector('.popup');
const buttonEditOpen = document.querySelector ('.profile__edit-button');
const buttonClose = document.querySelector ('.popup__edit-button');

const getName = document.querySelector ('.profile__name');
const getJob = document.querySelector ('.profile__description');

let formElement = document.querySelector ('.popup__container');
let nameInput = formElement.querySelector ('.form__input_string_name');
let jobInput = formElement.querySelector ('.form__input_string_job');



function openPopup () {
    popupElement.classList.add('popup_opened');
    nameInput.value = getName.textContent;
    jobInput.value = getJob.textContent;
}
  

function closePopup () {
  popupElement.classList.remove ('popup_opened');
}


function handleFormSubmit (evt) {
    evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
    getName.textContent = nameInput.value;
    getJob.textContent = jobInput.value;
    closePopup();                                   

}


buttonEditOpen.addEventListener('click', openPopup);
buttonClose.addEventListener('click', closePopup);
formElement.addEventListener('submit', handleFormSubmit); 