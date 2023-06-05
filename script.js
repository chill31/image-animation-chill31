const btn = document.querySelector(".btn");
const imgWrapper = document.querySelector(".image-wrapper");

function animate() {
  imgWrapper.classList.toggle("done");
}

btn.addEventListener("click", animate);