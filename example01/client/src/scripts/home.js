import ryan from '../images/ryan.jpg';
import '../styles/home.scss';

function component() {
  const element = document.createElement('div');
  element.innerHTML = 'Hello world home!!!';
  console.log(element);

  const logo = new Image();
  logo.className = 'image';
  logo.src = ryan;
  element.appendChild(logo);

  return element;
}

document.body.appendChild(component());
