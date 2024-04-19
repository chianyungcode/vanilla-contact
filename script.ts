const formAddress = document.getElementById("form-address") as HTMLFormElement;
const nameInput = document.getElementById("name") as HTMLInputElement;
const phoneInput = document.getElementById("phone") as HTMLInputElement;
const errorMessage = document.getElementById("error-message");

if (!formAddress || !nameInput || !phoneInput || !errorMessage) {
  console.error("Salah satu elemen tidak ditemukan");
} else {
  const submitFormEvent = (event: Event) => {
    event.preventDefault();

    // Reset pesan kesalahan
    errorMessage.innerHTML = "";

    // Mengambil nilai input dalam fungsi untuk mendapatkan nilai terkini
    const nameValue = nameInput.value;
    const phoneValue = phoneInput.value;
    const formData = {
      name: nameValue,
      phone: phoneValue,
    };

    const showErrorMessage = (message: string) => {
      errorMessage.innerHTML += message + "<br>"; // Menambahkan break line untuk setiap pesan kesalahan
    };

    let isValid = true; // Flag untuk mengecek validasi

    if (!nameValue.trim()) {
      showErrorMessage("Nama harus ada!");
      isValid = false;
    }

    if (!phoneValue.trim()) {
      showErrorMessage("Nomor telepon harus ada!");
      isValid = false;
    }

    // Hanya menampilkan alert jika semua validasi terpenuhi
    if (isValid) {
      localStorage.setItem("formData", JSON.stringify(formData));
      alert("Registrasi berhasil");
    }

    formAddress.reset();
  };

  formAddress.addEventListener("submit", submitFormEvent); // Menambahkan event listener ke formulir
}
