const btn = document.querySelector(".btn__contador");
let contador__Num = document.querySelector(".contador__body-content");
const btn__reset = document.querySelector(".btn__contador-reset");

btn.addEventListener("click", () => {
  contador__Num.innerHTML = parseInt(contador__Num.textContent) + 1;
});

btn__reset.addEventListener("click", () => {
  contador__Num.innerHTML = "0";
});
