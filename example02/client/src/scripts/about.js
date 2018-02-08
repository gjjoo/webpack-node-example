import ryan from '../images/ryan.jpg';
import '../styles/home.scss';

import MySharedTemplate from './shared/my-shared-template';

const templateData = { name: 'Rima', age: 34 };
document.body.insertAdjacentHTML('beforeend', MySharedTemplate(templateData));

function componentImage() {
  const logo = new Image();
  logo.className = 'image';
  logo.src = ryan;

  return logo;
}

document.body.appendChild(componentImage());
