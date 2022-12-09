const input__notes = document.querySelector("#note_input");
const btn__notes = document.querySelector(".btn__notes");
let newNote = document.createTextNode(input__notes);
let notes__history = document.querySelector(".notes__history");
const randomData = Math.random() * 100;
let arr = [];

window.onload = loadNotes();

function loadNotes() {
  if (localStorage.meuArr) {
    arr = JSON.parse(localStorage.getItem("meuArr"));
  }
  let arrValue = arr.length;
  arr.forEach((arr) => {
    console.log(arr);
  });
  for (let i = 0; i < arr.length; i++) {
    notes__history.innerHTML += `
            <div class="note" data-key="${randomData}">
                <span id="notename">
                    ${arr[i]}
                </span>
            </div>
        `;
  }
}

function addNotes() {
  if (input__notes.value.length == 0) {
    alert("Por favor insira uma anotação...");
  } else {
    notes__history.innerHTML += `
            <div class="note" data-key="${randomData}">
                <span id="notename">
                    ${input__notes.value}
                </span>
            </div>
        `;
    let newNotes = input__notes.value;
    arr.push(newNotes);
    input__notes.value = "";
    localStorage.setItem("meuArr", JSON.stringify(arr));
  }
}

btn__notes.addEventListener("click", () => {
  addNotes();
  console.log(arr);
});
