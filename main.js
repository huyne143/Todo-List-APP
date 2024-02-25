function validateForm() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const name = document.getElementById("name").value;
  const gender = document.getElementById("gender").value;
  const age = document.getElementById("age").value;

  const emailError = document.getElementById("emailError");
  const passwordError = document.getElementById("passwordError");
  const nameError = document.getElementById("nameError");
  const genderError = document.getElementById("genderError");
  const ageError = document.getElementById("ageError");

  let isValid = true;

  emailError.textContent = "";
  passwordError.textContent = "";
  nameError.textContent = "";
  genderError.textContent = "";
  ageError.textContent = "";

  if (!email) {
      emailError.textContent = "Email is required";
      isValid = false;
  } else if (!isValidEmail(email)) {
      emailError.textContent = "Invalid email format";
      isValid = false;
  }
// `mật khẩu bao gồm 1 kí tự đặc biệt 1 chữ hoa 1 ký tự số`
  if (!password) {
      passwordError.textContent = "Password is required";
      isValid = false;
  } else if (!isValidPassword(password)) {
      passwordError.textContent = "Invalid password format";
      isValid = false;
  }
  //  Tên ít nhất 6 kí tự 
  if (!name || name.length < 6) {
      nameError.textContent = "Name must be at least 6 characters";
      isValid = false;
  }

  if (!gender) {
      genderError.textContent = "Gender is required";
      isValid = false;
  }
  // trường tuổi 15-80
  if (!age || age < 15 || age > 80) {
      ageError.textContent = "Age must be between 18 and 50";
      isValid = false;
  }

  return isValid;
}

function isValidEmail(email) {
  // Basic email validation using regex
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function isValidPassword(password) {
  // Password validation with at least one special character, one uppercase letter, and one digit
  const passwordRegex = /^(?=.*[!@#$%^&*(),.?":{}|<>])(?=.*[A-Z])(?=.*\d).{6,}$/;
  return passwordRegex.test(password);
}
