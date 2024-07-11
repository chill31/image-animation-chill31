const btn = document.querySelector(".btn");
const imgWrapper = document.querySelector(".image-wrapper");

function animate() {
  imgWrapper.classList.toggle("done");
  btn.textContent === 'DEFAULT' ? btn.textContent = 'ACTIVATE' : btn.textContent = 'DEFAULT';
}

btn.addEventListener("click", animate);