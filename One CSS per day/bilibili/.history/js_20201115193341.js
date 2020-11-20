const images = document.querySelectorAll('header > div > img');
document.querySelector('header').addEventListener('mouseover', (e) => { 
  let percentage = e.clientX / window.outerWidth;
  let offset = 10 * percentage;
  let blur = 20;

  for (let [index, image] of images.entries()) {
    offset *= 1.3;
    let blurValue = (Math.pow((index/)))
  }
});