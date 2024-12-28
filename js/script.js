const navbarNav = document.querySelector(".navbar-nav");

document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

const hamburger = document.querySelector("#hamburger-menu");

document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});

// const $next = document.querySelector(".next");
// const $prev = document.querySelector(".prev");

// $next.addEventListener("click", () => {
//   const items = document.querySelectorAll(".item");
//   document.querySelector(".slide").appendChild(items[0]);
// });

// $prev.addEventListener("click", () => {
//   const items = document.querySelectorAll(".item");
//   document.querySelector(".slide").prepend(items[items.length - 1]);
// });
