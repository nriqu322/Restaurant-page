const contactPage = () => {
  const content = document.querySelector('#content');
  const mainContent = document.createElement('div');
  mainContent.classList.add('main-content', 'contact-page');
  content.appendChild(mainContent);

  const contactInfo = document.createElement('div');
  contactInfo.classList.add('contact-container');
  mainContent.appendChild(contactInfo);

  const contactTitle = document.createElement('h5');
  contactTitle.classList.add('title-section');
  contactTitle.textContent = 'Contact with us'

  const contactForm = document.createElement('div');
  contactForm.classList.add('contact-form');

  contactInfo.appendChild(contactTitle);
  contactInfo.appendChild(contactForm);
}

export default contactPage;