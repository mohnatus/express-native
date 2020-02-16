import { openPopup } from './success.popup';

let forms = [], controls;


function toggleOrderType() {
  const type = controls['orderType'].value;

  forms.forEach(f => {
    f.style.display = f.dataset.type === type ? '': 'none';
  })
}

function hideErrors(form) {
  [...form.querySelectorAll('.invalid-feedback')].forEach(el => el.innerHTML = "");
}

function setLoading(form, isLoading) {
  form.querySelector('[type="submit"]').classList.toggle('btn-loading', !!isLoading);
}

function showValidationErrors(form, errors) {
  hideErrors(form);
  Object.keys(errors).forEach(fieldName => {
    let field = form.elements[fieldName];
    let feedback = field.parentElement.querySelector('.invalid-feedback');
    if (feedback) feedback.innerHTML = errors[fieldName];
  })
}

function submitHandler(form) {
  hideErrors(form);

  setLoading(form, true);

  fetch(form.action, {
    method: "POST",
    body: new FormData(form)
  }).then(response => {
    if (response.ok) {
      return response.json();
    }
    throw new Error("Что-то пошло не так");
  }).then(response => {
    if (response.success) {
      openPopup();
      form.reset();
    } else if (response.validation) {
      showValidationErrors(form, response.validation);
    } else {
      throw new Error(response.error);
    }
  }).catch(error => {
    console.error(error);
    form.querySelector(".invalid-feedback--form").innerHTML = error.message || 'Что-то пошло не так';
  }).finally(() => {
    setLoading(form, false);
  })
}

export default () => {
  forms = [...document.querySelectorAll('[data-order-form]')];
  controls = document.querySelector('.tabs');

  controls.onchange = toggleOrderType;

  forms.forEach(f => {
    f.onsubmit = e => {
      e.preventDefault();
      submitHandler(f);
    }
  })
}
