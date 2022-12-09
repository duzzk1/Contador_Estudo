let ClickNotes = document.querySelectorAll(".note");

for (let i = 0; i < ClickNotes.length; i++) {
  ClickNotes[i].addEventListener("click", function () {
    ClickNotes[i].classList.add("ativo");
    if (ClickNotes[i].classList != "ativo") {
      ClickNotes[i].classList.add("ativo");
    } else {
      ClickNotes[i].classList.remove("ativo");
    }
  });
}

function ClicaNota() {}
