import homePage from "./home";
import menuPage from "./menu";
import contactPage from "./contact";

const headerPage = () => {
  const content = document.querySelector('#content');
  const header = document.createElement('header')
  const navbar = document.createElement('nav')

  content.appendChild(header);
  header.appendChild(navbar);

  const navOptions = document.createElement('div')
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
    const mainContent = document.getElementsByClassName('main-content');
    mainContent.remove();
  }

  home.addEventListener('click', () => {
    clearContent();
    homePage();
  })

  menu.addEventListener('click', () => {
    clearContent();
    menuPage();
  })

  contact.addEventListener('click', () => {
    clearContent();
    contactPage();
  })
}

export default headerPage;