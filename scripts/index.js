const nav = document.querySelector("nav");
const pages = ["blackjack", "dice", "snake", "numbers"];

for (let i = 0; i < pages.length; i++) {
  const a = document.createElement("a");
  const styleClasses = ["btn", `${[i] % 2 === 0 ? "black" : "red"}`];
  a.href = `${pages[i]}.html`;
  a.textContent = pages[i];
  a.classList.add(...styleClasses);
  nav.appendChild(a);
}
