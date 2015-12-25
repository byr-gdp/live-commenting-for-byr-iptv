var button = document.createElement('button');
// button.value = 'Click Me';
var content = document.createTextNode('Click Me');
button.appendChild(content);
button.setAttribute('style', 'width: 100px; background-color: red;');
document.getElementsByTagName('body')[0].appendChild(button);