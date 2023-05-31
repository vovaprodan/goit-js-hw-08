import throttle from 'lodash.throttle';

const formEl = document.querySelector('.feedback-form');
formEl.addEventListener('input', throttle( onInputForm, 500))

const emailInput = document.querySelector('input[name="email"]');
const messageInput = document.querySelector('textarea[name="message"]');

function onInputForm(evt) {
   
    const email = emailInput.value;
    const message = messageInput.value;

    const feedbackFormState = { email, message };
    localStorage.setItem('feedback-form-state', JSON.stringify(feedbackFormState));
  
};
window.addEventListener('load', () => {
    const feedbackFormState = JSON.parse(localStorage.getItem('feedback-form-state'));

    if (feedbackFormState) {
        emailInput.value = feedbackFormState.email;
        messageInput.value = feedbackFormState.message;
    }
});
formEl.addEventListener('submit', (event) => {
   
    localStorage.removeItem('feedback-form-state');
    //   emailInput.value = '';
    //  messageInput.value = '';

    const formData = { email: emailInput.value, message: messageInput.value };
    console.log(formData);

    event.currentTarget.reset();

    event.preventDefault();
});
