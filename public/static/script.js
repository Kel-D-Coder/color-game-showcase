// Hamburger menu
var burger = document.querySelector(".burger");
var menu = document.querySelector(".mobile-menu");
if (burger && menu) {
  burger.addEventListener("click", function () {
    var open = menu.classList.toggle("open");
    burger.setAttribute("aria-expanded", String(open));
    burger.setAttribute("aria-label", open ? "Close menu" : "Open menu");
  });
  menu.querySelectorAll("a").forEach(function (a) {
    a.addEventListener("click", function () {
      menu.classList.remove("open");
      burger.setAttribute("aria-expanded", "false");
    });
  });
}

// Scroll reveals
var observer = new IntersectionObserver(
  function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add("in");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15 }
);
document.querySelectorAll(".reveal").forEach(function (el, i) {
  el.style.transitionDelay = (i % 3) * 0.08 + "s";
  observer.observe(el);
});