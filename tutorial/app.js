/**
 * Scroll Event - on an element or a document


window.addEventListener("scroll", function () {
  console.log(window.screenY + "px");
  console.log(window.screenX + "px");
});

document

scrollY - returns the number of pixels the document
is currently scrolled along the vertical axis (pageYOffset)

scrollX - returns the number of pixels the document
is currently scrolled along the horizontal axis (pageXOffset)

 */
window.addEventListener("scroll", function () {
  console.log(window.screenY + "px");
  console.log(window.screenX + "px");
});
