let input = document.querySelector(".input");
let button = document.querySelector(".button");
   
button.disabled = true;
input.addEventListener("change", stateHandle);
function stateHandle() {
  if (document.querySelector(".input").value === "") {
    button.disabled = true;
    console.log("No hay Campos ");
  } else {
    button.disabled = false;
    console.log("Hay datos");
  }
}
