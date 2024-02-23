const btn = document.querySelector('.switch input[type="checkbox"]');
const text = document.querySelector(".light-or-dark");

btn.addEventListener("click", () => {
  let el = document.body;
  el.classList.toggle("dark-mode");
});
