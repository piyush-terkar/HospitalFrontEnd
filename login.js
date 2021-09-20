const Registerform = document.querySelector("#regForm");
const Regbtn = document.querySelector("#Register");
const ReqMsg = document.querySelector("#ReqMsg");

Regbtn.addEventListener("click", (e) => {
  e.preventDefault();
  Registerform.classList.add("hide");
  ReqMsg.classList.remove("hide");
});
