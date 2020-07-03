import menuImage1 from './images/menu-image-1.jpg';
import menuImage2 from './images/menu-image-2.jpg';
import menuImage3 from './images/menu-image-3.jpg';
import menuImage4 from './images/menu-image-4.jpg';
import menuImage5 from './images/menu-image-5.jpg';
import menuImage6 from './images/menu-image-6.jpg';


const menuPage = () => {
  const content = document.querySelector('#content');
  content.classList.add('menu-page');
  const mainContent = document.createElement('div');
  mainContent.id = 'main-content';
  mainContent.classList.add('main-content', 'menu-page');
  content.appendChild(mainContent);

  const menuInfo = document.createElement('div');
  menuInfo.classList.add('menu-container');
  mainContent.appendChild(menuInfo);

  const menuTitle = document.createElement('h6');
  menuTitle.classList.add('title-section');
  menuTitle.textContent = 'See our menu';
  
  menuInfo.appendChild(menuTitle);

  const cardContainer = document.createElement('div');
  cardContainer.classList.add('card-container', 'd-flex', 'row');
  menuInfo.appendChild(cardContainer);

  const images = [menuImage1, menuImage2, menuImage3, menuImage4, menuImage5, menuImage6];

  images.forEach(image => {
    const card = document.createElement('div');
    card.classList.add('card', 'col-12', 'col-md-6', 'col-lg-4');
    cardContainer.appendChild(card);

    const menuImage = document.createElement('img');
    menuImage.classList.add('menu-image', 'img-thumbnail')
    menuImage.src = image;
    card.appendChild(menuImage);
  });
}

export default menuPage;