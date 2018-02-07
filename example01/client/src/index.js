import ryan from './assets/images/ryan.jpg';
import './assets/styles/imageViewer.scss';

function component() {
  var element = document.createElement('div');
  element.innerHTML = "Hello world@@@";
  console.log(element);

  var logo = new Image();
  logo.className = 'image';
  logo.src = ryan;
  element.appendChild(logo);

  return element;
}

document.body.appendChild(component());
