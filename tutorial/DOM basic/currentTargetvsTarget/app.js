/**
 * currentTarget - always referes to the element to which the event handler has been attached to
 * target - identifies the element to which the event occurred
 */

const btns = document.querySelectorAll(".btn");

btns.forEach(function (btn) {
  //   console.log(btn);
  btn.addEventListener("click", function (e) {
    // console.log("target", e.target);
    // e.target.style.color = "green";
    console.log(e.currentTarget);
    e.currentTarget.style.color = "green";
  });
});
