let nameInputElement = document.getElementById("name");

function InputFocus(element) {
  element.focus();
}

function getDOMElement(DOMEElement) {
  InputFocus(DOMEElement);
}

window.addEventListener("load", () => {
  getDOMElement(nameInputElement);
});
