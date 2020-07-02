const menuPage = () => {
  const content = document.querySelector('#content');
  const mainContent = document.createElement('div');
  mainContent.id = 'main-content'
  mainContent.classList.add('main-content', 'menu-page');
  content.appendChild(mainContent);

  const menuInfo = document.createElement('div');
  menuInfo.classList.add('menu-container');

  const menuTitle = document.createElement('h3');
  menutTitle.classList.add('title-section');
  menutTitle.textContent = 'See our menu'

  mainContent.appendChild(menuInfo);
  menuInfo.appendChild(menuTitle);
}

export default menuPage;