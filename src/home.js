import './style.css';

const homePage = () => {
  const content = document.querySelector('#content');
  const mainContent = document.createElement('div');
  mainContent.classList.add('main-content', 'home-page');
  mainContent.textContent = "The best F*cking meat balls ever!";

  content.appendChild(mainContent);
}

export default homePage;