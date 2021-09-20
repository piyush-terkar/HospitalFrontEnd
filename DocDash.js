const tbody = document.querySelector("tbody");

let tablebuttons = tbody.querySelectorAll("button");

tablebuttons.forEach((disbtn) => {
  disbtn.addEventListener("click", () => {
    disbtn.classList.add("hide");
    disbtn.parentElement.querySelector("p").classList.remove("hide");
  });
});
