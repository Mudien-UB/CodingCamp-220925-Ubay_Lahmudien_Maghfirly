const welcome = document.getElementById("welcome");
const form = document.getElementById("contactForm");
const nameInput = document.getElementById("name");
const birthdateInput = document.getElementById("birthdate");
const sexInputs = document.getElementsByName("sex");
const messageInput = document.getElementById("message");
const output = document.getElementById("output");

const errorName = document.getElementById("errorName");
const errorBirthdate = document.getElementById("errorBirthdate");
const errorSex = document.getElementById("errorSex");
const errorMessage = document.getElementById("errorMessage");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  console.log("cek")

  const name = nameInput.value.trim();
  const birthdate = birthdateInput.value.trim();
  const sex = Array.from(sexInputs).find(r => r.checked);
  const message = messageInput.value.trim();


  [errorName, errorBirthdate, errorSex, errorMessage].forEach(err =>
    err.classList.add("hidden")
  );

  let valid = true;

  if (name.length < 3) {
    errorName.textContent = "Nama minimal 3 karakter";
    errorName.classList.remove("hidden");
    valid = false;
  }

  if (!birthdate) {
    errorBirthdate.textContent = "Tanggal lahir harus diisi";
    errorBirthdate.classList.remove("hidden");
    valid = false;
  }

  if (!sex) {
    errorSex.textContent = "Pilih jenis kelamin";
    errorSex.classList.remove("hidden");
    valid = false;
  }

  if (message.length < 5) {
    errorMessage.textContent = "Pesan minimal 5 karakter";
    errorMessage.classList.remove("hidden");
    valid = false;
  }

  if (valid) {
    const currentTime = new Date().toString();
    output.innerHTML = `
      <p><strong>Current time:</strong> ${currentTime}</p>
      <p><strong>Nama:</strong> ${name}</p>
      <p><strong>Tanggal Lahir:</strong> ${birthdate}</p>
      <p><strong>Jenis Kelamin:</strong> ${sex.value}</p>
      <p><strong>Pesan:</strong> ${message}</p>
    `;
    welcome.textContent = `Hi ${name}, Welcome To Website`;
  } else {
    output.innerHTML = ""; 
  }
});
