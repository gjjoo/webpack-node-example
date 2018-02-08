import ryan from '../images/ryan.jpg';
import '../styles/about.scss';

function component() {
  const element = document.createElement('div');
  element.innerHTML = 'Hello world about!!!';
  console.log(element);

  const logo = new Image();
  logo.className = 'image';
  logo.src = ryan;
  element.appendChild(logo);

  return element;
}

document.body.appendChild(component());
