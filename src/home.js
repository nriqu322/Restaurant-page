const homePage = () => {
  const content = document.querySelector('#content');
  content.classList.add('home-page');
  const mainContent = document.createElement('div');
  mainContent.id = 'main-content';
  mainContent.classList.add('main-content', 'd-flex', 'flex-column');
  content.appendChild(mainContent);

  const heroContent = document.createElement('div');
  heroContent.classList.add('hero-content', 'd-flex', 'justify-content-center', 'align-items-center');
  heroContent.textContent = 'The best F*cking meat balls ever!';
  mainContent.appendChild(heroContent);

  const dropdown = document.createElement('div');
  // dropdown.classList.add('');
  mainContent.appendChild(dropdown);

  const locationContainer = document.createElement('div');
  locationContainer.classList.add('location-container');
  dropdown.appendChild(locationContainer);

  const locationBtn = document.createElement('button');
  locationBtn.classList.add('location-btn', 'btn', 'btn-warning');
  locationBtn.textContent = 'Locations';
  locationContainer.appendChild(locationBtn);

  const dropLocation = document.createElement('div');
  dropLocation.classList.add('dropdown-location', 'btn');
  locationContainer.appendChild(dropLocation);

  const locals = ['Peru', 'Guatemala', 'Mexico', 'Morocco', 'Bolivia'];

  locals.forEach((country) => {
    const list = document.createElement('a');
    list.innerHTML = country;
    list.setAttribute('href', '#');
    dropLocation.appendChild(list);
  });
};

export default homePage;
