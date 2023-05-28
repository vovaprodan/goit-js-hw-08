const formEl = document.querySelector('.feedback-form');
formEl.addEventListener('input', onInputForm)

const emailValue = document.querySelector('input[name="email"]').value;
const messageValue = document.querySelector('textarea[name="message"]').value;

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
      
        emailValue = feedbackFormState.email;
        messageValue = feedbackFormState.message;
    }
});
formEl.addEventListener('submit', (event) => {
   
    localStorage.removeItem('feedback-form-state');

    event.currentTarget.reset();

    console.log(emailValue)
   

    event.preventDefault();
});