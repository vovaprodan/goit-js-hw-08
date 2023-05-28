import throttle from 'lodash.throttle';

const formEl = document.querySelector('.feedback-form');
formEl.addEventListener('input', onInputForm)

const emailInput = document.querySelector('input[name="email"]');
const messageInput = document.querySelector('textarea[name="message"]');

function onInputForm(evt) {
   
    const elements = evt.currentTarget.elements;
    const email = elements.email.value;
    const message = elements.message.value;

    const feedbackFormState = { email, message };
    localStorage.setItem('feedback-form-state', JSON.stringify(feedbackFormState));
  
};
window.addEventListener('load', () => {
    const feedbackFormState = JSON.parse(localStorage.getItem('feedback-form-state'));

    if (feedbackFormState) {
        // заповнюємо поля форми переданими з сховища значеннями
        emailInput.value = feedbackFormState.email;
        messageInput.value = feedbackFormState.message;
    }
});
formEl.addEventListener('submit', (event) => {
   
    localStorage.removeItem('feedback-form-state');
      emailInput.value = '';
     messageInput.value = '';

    const formData = { email: emailInput.value, message: messageInput.value };
    console.log(formData);

    event.preventDefault();
});
throttle(function(e) {
    timeCheck += 1},500)