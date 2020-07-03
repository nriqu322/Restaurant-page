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
  cardContainer.classList.add('card-container', 'd-flex', 'row', 'col-12', 'col-md-6', 'col-lg-4');
  menuInfo.appendChild(cardContainer);

  for (let i = 0; i < 7; i += 1) {
    const card = document.createElement('div');
    card.classList.add('card');
    card.id = `card-${i}`;
    card.textContent = 'Text Here'
    cardContainer.appendChild(card);
  }
}

export default menuPage;