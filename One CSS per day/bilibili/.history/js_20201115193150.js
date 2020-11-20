const images = document.querySelectorAll('header > div > img');
document.querySelector('header').addEventListener('mouseover', (e) => { 
  let percentage = e.clientX / window.outerWidth;
  let offset = 10 * percentage
});