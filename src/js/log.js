function printError(elemId, hintMsg) {
  document.getElementById(elemId).innerHTML = hintMsg;
}

function isValidUsername(username) {
  if (username === "") {
      return "Please fill in the fields";
  } else {
      var regex = /^[a-zA-Z\s]+$/;
      if (regex.test(username) === false) {
          return "Please, enter a valid name";
      }
  }
  return "";
}

function isValidPassword(password) {
  if (/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*_\-]).{8,}$/.test(password)) {
      return "";
  } else {
      return "Password must contain at least 8 characters with an uppercase letter.";
  }
}

function validateForm() {
  const loginForm = document.getElementById("login-form");
  const username = loginForm.username.value;
  const password = loginForm.password.value;
  let formIsValid = true;

  const usernameError = isValidUsername(username);
  const passwordError = isValidPassword(password);

  if (usernameError) {
      printError("nameError", usernameError);
      formIsValid = false;
  } else {
      printError("nameError", "");
  }

  if (passwordError) {
      printError("passwordError", passwordError);
      formIsValid = false;
  } else {
      printError("passwordError", "");
  }

  if (formIsValid) {
      const formData = {
          username: username,
          password: password
      };
      console.log(formData);

      console.log("Form is valid. Sending data...");
  }

  return false; // предотвращаем обсерантус стандартного действия кнопки(не отправляем форму)
}
