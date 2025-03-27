import "./style.css";

const header = document.querySelector("header");
const logo = document.getElementById("logo");

window.addEventListener("scroll", () => {
  if (scrollY === 0) {
    header?.classList.remove("bg-neutral-950");
    logo?.classList.add("opacity-0");
  } else if (scrollY > 0) {
    header?.classList.add("bg-neutral-950");
    logo?.classList.remove("opacity-0");
  }
});
