const insert = document.querySelector("#insert");                 // from the Insert HTML button
insert.addEventListener("click", () => {                          // on click of the Insert HTML button do ...
  const subject = document.querySelector("#subject");             // make the "subject" the choice fron the list ??
  const positionSelect = document.querySelector("#position");
  subject.insertAdjacentHTML(
    positionSelect.value,
    "<strong>inserted text</strong>"
  );
});

const reset = document.querySelector("#reset");
reset.addEventListener("click", () => {
  document.location.reload();
});
