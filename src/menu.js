const menuPage = () => {
  const content = document.querySelector('#content');
  const mainContent = document.createElement('div');
  mainContent.id = 'main-content'
  mainContent.classList.add('main-content', 'menu-page');
  content.appendChild(mainContent);

  const menuInfo = document.createElement('div');
  menuInfo.classList.add('menu-container');
  mainContent.appendChild(menuInfo);

  const menuTitle = document.createElement('h6');
  menuTitle.classList.add('title-section');
  menuTitle.textContent = 'See our menu';
  
  menuInfo.appendChild(menuTitle);
}

export default menuPage;