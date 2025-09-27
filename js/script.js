const output = document.getElementById("output");
const welcome = document.getElementById("welcome");

const onSubmit = (e) => {
  e.preventDefault();

  const form = e.target;
  const name = form.elements.name.value.trim();
  const birthdate = form.elements.birthdate.value.trim();
  const sex = Array.from(form.elements.sex).find(r => r.checked);
  const message = form.elements.message.value.trim();

  const errorFields = form.querySelectorAll(".error");
  errorFields.forEach(err => {
    err.textContent = "";
    err.classList.add("hidden");
  });

  let valid = true;

  if(name === ""){
    errorFields[0].textContent = "Nama tidak boleh kosong";
    errorFields[0].classList.remove("hidden");
    valid = false;
  }else if (name.length < 3) {
    errorFields[0].textContent = "Nama minimal 3 karakter";
    errorFields[0].classList.remove("hidden");
    valid = false;
  }

 if (!birthdate) {
    errorFields[1].textContent = "Tanggal lahir harus diisi";
    errorFields[1].classList.remove("hidden");
    valid = false;
  } else if (!isValidDate(birthdate)) {
    errorFields[1].textContent = "Tanggal lahir tidak valid";
    errorFields[1].classList.remove("hidden");
    valid = false;
  }

  if (!sex) {
    errorFields[2].textContent = "Pilih jenis kelamin";
    errorFields[2].classList.remove("hidden");
    valid = false;
  }

  if(message === ""){
    errorFields[3].textContent = "Pesan tidak boleh kosong";
    errorFields[3].classList.remove("hidden");
    valid = false;
  } else if (message.length < 5) {
    errorFields[3].textContent = "Pesan minimal 5 karakter";
    errorFields[3].classList.remove("hidden");
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
    output.innerHTML = "Tolong masukkan data yang valid !";
    welcome.textContent = "Hi, Welcome To Website";
  }
}

const isValidDate = (dateStr) => {

if (!dateStr) return false;

  const parts = dateStr.split("-"); 
  if (parts.length !== 3) return false;

  const year = parseInt(parts[0], 10);
  const month = parseInt(parts[1], 10);
  const day = parseInt(parts[2], 10);

  if (isNaN(year) || isNaN(month) || isNaN(day)) return false;
  if (month < 1 || month > 12) return false;
  if (day < 1 || day > 31) return false;

  const date = new Date(year, month - 1, day);
  return (
    date.getFullYear() === year &&
    date.getMonth() + 1 === month &&
    date.getDate() === day
  );
}

const toggleMenu = () => {
  const navLinks = document.getElementById("navLinks");
  navLinks.classList.toggle("show");

  if (navLinks.classList.contains("show")) {
    document.addEventListener("click", closeMenuOutside);
  } else {
    document.removeEventListener("click", closeMenuOutside);
  }
}

const closeMenuOutside = (event) => {
  const navLinks = document.getElementById("navLinks");
  const toggleBtn = document.querySelector(".menu-toggle");

  if (!navLinks.contains(event.target) && !toggleBtn.contains(event.target)) {
    navLinks.classList.remove("show");
    document.removeEventListener("click", closeMenuOutside);
  }
}

