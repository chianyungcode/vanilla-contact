const formElement = document.getElementById("form-address");
const modalElement = document.getElementById("modal");

// Untuk membuka dan menutup modal
document.querySelector(".sidebar_button").addEventListener("click", () => {
  modalElement.style.display = "block";
});

document.querySelector(".close-button").addEventListener("click", () => {
  modalElement.style.display = "none";
});

// Untuk form submission
formElement.addEventListener("submit", (e) => {
  e.preventDefault();

  let inputName = document.getElementById("name").value;
  let inputPhone = document.getElementById("phone").value;

  if (!inputName || !inputPhone) {
    alert("Nama dan nomor telepon harus diisi");
    return;
  }

  const formData = {
    name: inputName,
    phone: inputPhone,
  };

  localStorage.setItem("contact", JSON.stringify(formData));

  // ! PERLU DIGANTI DENGAN POP UP NOTIFICATION BUKAN ALERT
  alert("This form has been successfully submitted!");
  console.log(
    `This form has a username of ${inputName} and password of ${inputPhone}`
  );

  modalElement.style.display = "none";

  inputName = "";
  inputPhone = "";
});

const storedData = localStorage.getItem("contact");

if (storedData) {
  const contact = JSON.parse(storedData);

  const tableDataName = document.getElementById("contact-name");
  const tableDataPhone = document.getElementById("contact-phone");

  tableDataName.textContent = contact.name;
  tableDataPhone.textContent = contact.phone;
} else {
  const tableRow = document.getElementById("table-row");
  tableRow.style.display = "none";
}
