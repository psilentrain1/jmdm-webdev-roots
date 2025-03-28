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

const mobileMenuBtn = document.getElementById(
  "mobileMenuBtn",
) as HTMLButtonElement;
const mobileMenuContent = document.getElementById(
  "mobileMenuContent",
) as HTMLDivElement;
const menuLinksUL = document.getElementById("menuLinks") as HTMLUListElement;
const menuLinks = menuLinksUL.children;

mobileMenuBtn.addEventListener("click", () => {
  mobileMenuContent.classList.toggle("hidden");
});

for (let i = 0; i < menuLinks.length; i++) {
  const link = menuLinks[i] as HTMLAnchorElement;
  link.addEventListener("click", () => {
    mobileMenuContent.classList.toggle("hidden");
  });
}
