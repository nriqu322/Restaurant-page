import homePage from "./home";
import menuPage from "./menu";
import contactPage from "./contact";
import logo from "./logo.png";

const headerPage = () => {
  const content = document.querySelector('#content');
  const header = document.createElement('header')
  const navbar = document.createElement('nav')

  content.appendChild(header);
  header.appendChild(navbar);

  const myLogo = new Image();
  myLogo.classList.add('logo');
  myLogo.src = logo;
  navbar.appendChild(myLogo);

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
    const mainContent = document.getElementById('main-content');
    const content = document.getElementById('content');
    content.className = "";
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