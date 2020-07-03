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

  const cardContent = [
    [menuImage1, 'Classic Pork Ball with Original Stoemp & Gravy', '11 usd'], 
    [menuImage2, 'Classic Pork Ball with Tasty Salad', '11 usd'],
    [menuImage3, '4 Belgian ballekes with Tasty Salad', '10 usd'], 
    [menuImage4, 'Kids menu: Belgian ballekes with stoemp', '7 usd'], 
    [menuImage5, 'Delicious Veggie with Cold Pasta', '11 usd'], 
    [menuImage6, 'Ball the Way: 2 persons', '35 usd']
  ];
  

  cardContent.forEach(cardInfo => {
    const [cardImage, cardTitle, cardPrice] = cardInfo;

    const card = document.createElement('div');
    card.classList.add('card', 'col-12', 'col-md-6', 'col-lg-4');
    cardContainer.appendChild(card);

    const menuImage = document.createElement('img');
    menuImage.classList.add('menu-image', 'img-thumbnail')
    menuImage.src = cardImage;
    card.appendChild(menuImage);

    const textContainer = document.createElement('div');
    textContainer.classList.add('text-container');
    card.appendChild(textContainer);

    const menuTitle = document.createElement('div');
    menuTitle.classList.add('card-title', 'font-weight-bold', 'font-italic');
    menuTitle.textContent = cardTitle;
    textContainer.appendChild(menuTitle);

    const menuPrice = document.createElement('div');
    menuPrice.classList.add('card-price');
    menuPrice.textContent = cardPrice;
    textContainer.appendChild(menuPrice);
  });

  
}

export default menuPage;