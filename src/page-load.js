import './style.css'

const renderPage = () => {
  const content = document.querySelector('#content');

  const heroContent = document.createElement('div');
  heroContent.classList.add('hero-content');
  heroContent.textContent = "The best MEAT BALLS ever!";

  content.appendChild(heroContent);
}

export default renderPage;