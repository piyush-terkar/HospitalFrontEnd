const patientCard = document.querySelector("#Patient");
const patientTbl = document.querySelector("#PatientTbl");
const addbtn = document.querySelector("#adminSubmit");

addbtn.addEventListener("click", () => {
  addbtn.classList.add("hide");
  let form = addbtn.parentElement.querySelector("form");
  form.classList.remove("hide");
  let submit = form.querySelector("button");
  submit.addEventListener("click", async (e) => {
    console.log("add clicked!");
    e.preventDefault();
    let tr = document.createElement("tr");
    tr.innerHTML = `
      <td>${form.querySelector(".fname").value}</td>
      <td>${form.querySelector(".lname").value}</td>
      <td>${form.querySelector(".Diagnosis").value}</td>
      <td>
        <button class="btn btn-primary edit">Edit</button>
        <form class="card hide">
                  <label for="firstName">firstName</label>
                  <input type="text" name="firstName" class="fname" />
                  <label for="lastName">LastName</label>
                  <input type="text" name="lastName" class="lname" />
                  <label for="Diagnosis">Email</label>
                  <input type="text" name="Diagnosis" class="Diagnosis" />
                  <button class="btn btn-primary" id="adminSubmit">Add</button>
                </form>
      </td>
      <td><button class="btn btn-danger">Remove</button></td>`;
    document.querySelector("tbody").append(tr);
    Remove = document.querySelectorAll(".btn-danger");
    addRemoveListeners();
    edit = document.querySelectorAll(".edit");
    addEditListeners();
    form.querySelector(".fname").value = "";
    form.querySelector(".lname").value = "";
    form.querySelector(".Diagnosis").value = "";
    form.classList.add("hide");
    addbtn.classList.remove("hide");
  });
});

patientCard.addEventListener("click", () => {
  patientTbl.classList.remove("hide");
});

let Remove = document.querySelectorAll(".btn-danger");
let edit = document.querySelectorAll(".edit");

addEditListeners();
function addEditListeners() {
  edit.forEach((btn) => {
    btn.addEventListener("click", () => {
      btn.classList.add("hide");
      let form = btn.parentElement.querySelector("form");
      form.classList.remove("hide");
      let submit = form.querySelector("button");
      submit.addEventListener("click", async (e) => {
        e.preventDefault();
        let tr = form.closest("tr");
        td = tr.querySelectorAll("td");
        td[0].innerText = form.querySelector(".fname").value;
        td[1].innerText = form.querySelector(".lname").value;
        td[2].innerText = form.querySelector(".Diagnosis").value;
        form.classList.add("hide");
        btn.classList.remove("hide");
      });
    });
  });
}

addRemoveListeners();
function addRemoveListeners() {
  Remove.forEach((btn) => {
    btn.addEventListener("click", () => {
      btn.parentElement.parentElement.remove();
    });
  });
}
