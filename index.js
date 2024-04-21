const formElement = document.getElementById("form-address");
const modalElement = document.getElementById("modal");

document.querySelector(".sidebar_button").addEventListener("click", () => {
  document.getElementById("modal").classList.remove("hidden");
});

// Menangani klik tombol close untuk menyembunyikan modal
document.querySelector(".close-button").addEventListener("click", () => {
  document.getElementById("modal").classList.add("hidden");
});

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

  alert("This form has been successfully submitted!");
  console.log(
    `This form has a username of ${inputName} and password of ${inputPhone}`
  );

  inputName = "";
  inputPhone = "";

  document.getElementById("modal").classList.add("hidden");
});
