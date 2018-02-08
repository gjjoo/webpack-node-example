import ryan from '../images/ryan.jpg';
import '../styles/home.scss';

import MySharedTemplate from './shared/my-shared-template.hbs';

setTimeout(() => {
  const templateData = {
    items: [
      { name: 'A', age: 34 },
      { name: 'B', age: 40 }
    ]
  };

  document.getElementById('my-shared-template')
    .insertAdjacentHTML('beforeend', MySharedTemplate(templateData));
}, 1000);


function componentImage() {
  const logo = new Image();
  logo.className = 'image';
  logo.src = ryan;

  return logo;
}

document.body.appendChild(componentImage());
