import deal from './deal.png';

const contactPage = () => {
  const content = document.querySelector('#content');
  content.classList.add('contact-page');
  const mainContent = document.createElement('div');
  mainContent.id = 'main-content'
  mainContent.classList.add('main-content'); // 'contact-page');
  content.appendChild(mainContent);

  const contactTitle = document.createElement('h2');
  contactTitle.classList.add('title-section');
  contactTitle.textContent = 'Contact with us';
  mainContent.appendChild(contactTitle);

  const contactInfo = document.createElement('div');
  contactInfo.classList.add('contact-container', 'd-flex','flex-column', 'flex-md-row', 'justify-content-between');
  mainContent.appendChild(contactInfo);

  const contactForm = document.createElement('form');
  contactForm.classList.add('contact-form');
  contactInfo.appendChild(contactForm);

  const groupName = document.createElement('div');
  groupName.classList.add('form-group');
  contactForm.appendChild(groupName);

  const inputName = document.createElement('input');
  inputName.id = 'input-name';
  inputName.setAttribute('type', 'text');
  inputName.setAttribute('placeholder', 'Enter full name');
  inputName.classList.add('form-control');
  groupName.appendChild(inputName);

  const groupEmail = document.createElement('div');
  groupEmail.classList.add('form-group');
  contactForm.appendChild(groupEmail);

  const inputEmail = document.createElement('input');
  inputEmail.id = 'inpu-email';
  inputEmail.setAttribute('type', 'email');
  inputEmail.setAttribute('placeholder', 'Enter your email');
  inputEmail.classList.add('form-control');
  contactForm.appendChild(inputEmail);

  const groupText = document.createElement('div');
  groupText.classList.add('form-group');
  contactForm.appendChild(groupText);

  const inputText = document.createElement('textarea');
  inputText.id = 'input-text';
  inputText.setAttribute('rows', '4');
  inputText.setAttribute('placeholder', 'Add your comments here');
  inputText.classList.add('form-control');
  contactForm.appendChild(inputText);

  const groupBtn = document.createElement('div');
  groupBtn.classList.add('form-group');
  contactForm.appendChild(groupBtn);

  const submitBtn = document.createElement('input');
  submitBtn.id = 'input-submit';
  submitBtn.setAttribute('type', 'submit');
  submitBtn.classList.add('btn', 'btn-primary');
  contactForm.appendChild(submitBtn);

  const dealImg = new Image();
  dealImg.classList.add('deal');
  dealImg.src = deal;
  contactInfo.appendChild(dealImg);
}

export default contactPage;