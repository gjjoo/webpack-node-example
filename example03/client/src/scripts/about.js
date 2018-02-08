import ryan from '../images/ryan.jpg';
import '../styles/home.scss';

import MacTemplate from './shared/mac-template.hbs';

setTimeout(() => {
  const templateData = { name: 'Jake', age: 34 };

  document.getElementById('mac-template')
    .insertAdjacentHTML('beforeend', MacTemplate(templateData));
}, 1000);

function componentImage() {
  const logo = new Image();
  logo.className = 'image';
  logo.src = ryan;

  return logo;
}

document.body.appendChild(componentImage());
