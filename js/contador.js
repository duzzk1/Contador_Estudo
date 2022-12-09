const btn = document.querySelector(".btn__contador");
let contador__Num = document.querySelector(".contador__body-content");
const btn__reset = document.querySelector(".btn__contador-reset");
let arrCont = [];

function resetCont() {
  contador__Num.innerHTML = parseInt("0");
  arrCont = [];
  localStorage.removeItem("arrCount", JSON.stringify(arrCont));
}

btn.addEventListener("click", () => {
  addCont();
});

window.onload = loadCont();

function addCont() {
  contador__Num.innerHTML = parseInt(contador__Num.textContent) + 1;

  let newCont = contador__Num.innerHTML;
  arrCont.push(newCont);
  localStorage.setItem("arrCount", JSON.stringify(arrCont));
}

function loadCont() {
  contador__Num.innerHTML = "0";

  if (localStorage.arrCount) {
    arrCont = JSON.parse(localStorage.getItem("arrCount"));
  }
  contador__Num.innerHTML = `${arrCont.length}`;
}

btn__reset.addEventListener("click", () => {
  resetCont();
});
