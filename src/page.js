import homePage from './home';
import menuPage from './menu';
import contactPage from './contact';
import logo from './images/logo.png';

const headerPage = () => {
  const content = document.querySelector('#content');
  const header = document.createElement('header');
  const navbar = document.createElement('nav');

  content.appendChild(header);
  header.appendChild(navbar);

  const myLogo = new Image();
  myLogo.classList.add('logo');
  myLogo.src = logo;
  navbar.appendChild(myLogo);

  const navOptions = document.createElement('div');
  navOptions.classList.add('nav-options');
  navbar.appendChild(navOptions);

  const home = document.createElement('div');
  home.classList.add('navbar-item');
  home.innerHTML = 'Home';
  const menu = document.createElement('div');
  menu.classList.add('navbar-item');
  menu.innerHTML = 'Menu';
  const contact = document.createElement('div');
  contact.classList.add('navbar-item');
  contact.innerHTML = 'Contact';

  navOptions.appendChild(home);
  navOptions.appendChild(menu);
  navOptions.appendChild(contact);

  function clearContent() {
    const mainContent = document.getElementById('main-content');
    content.className = '';
    mainContent.remove();
  }

  myLogo.addEventListener('click', () => {
    clearContent();
    home.style.color = '#e4a356';
    menu.style.color = '#fff';
    contact.style.color = '#fff';
    homePage();
  });

  home.addEventListener('click', () => {
    clearContent();
    home.style.color = '#e4a356';
    menu.style.color = '#fff';
    contact.style.color = '#fff';
    homePage();
  });

  menu.addEventListener('click', () => {
    clearContent();
    menu.style.color = '#e4a356';
    home.style.color = '#fff';
    contact.style.color = '#fff';
    menuPage();
  });

  contact.addEventListener('click', () => {
    clearContent();
    contact.style.color = '#e4a356';
    menu.style.color = '#fff';
    home.style.color = '#fff';
    contactPage();
  });
};

export default headerPage;
