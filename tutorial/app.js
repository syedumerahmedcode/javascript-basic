/**
 * The load event is fired when the whole page has been loaded
 * including all dependent resourcessuch as stylesheets and images. This is
 * in contrast to DOMContentLoaded, which is fired as soon as the page DOM
 * has been loaded, without waiting for resources to finish loading.
 *
 * window.addEventListener("load", function () {
 *   // Your code goes here.
 * });
 *
 */

window.addEventListener("load", function () {
  const img = document.querySelector("img");
  console.log(img);
  console.log(img.width);
});
