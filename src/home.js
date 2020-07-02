import './style.css'

const homePage = () => {
  const content = document.querySelector('#content');

  const heroContent = document.createElement('div');
  heroContent.classList.add('hero-content');
  heroContent.textContent = "The best F*cking meat balls ever!";

  content.appendChild(heroContent);
}

export default homePage;