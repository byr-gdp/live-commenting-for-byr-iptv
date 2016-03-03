var script = document.createElement('script');

script.type = 'text/javascript';

script.onload = function() {
  console.log('loaded');
  sayName();
}

script.onerror = function() {
  console.log('Error');
}

script.src = 'http://127.0.0.1:6868/external.js';

document.getElementsByTagName('body')[0].appendChild(script);