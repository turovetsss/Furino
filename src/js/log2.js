function printError(elemId, hintMsg) {
  document.getElementById(elemId).innerHTML = hintMsg;
}
function ValidUsername(username) {
  if (username === "") {
    return "Please fill in the fields";
  } else {
    var regex1 = /^[a-zA-Z\s]+$/;
    if (regex1.test(username) == false) {
      return "Please,enter a valid name";
    }
  }
  return "";
}

function ValidEmail(email) {
  if (email === "") {
    return "Please fill in the fields";
  } else {
    var regex3 = /^\S+@\S+\.\S+$/;
    if (regex3.test(email) == false) {
      return "Please,enter a valid email.";
    }
  }
  return "";
}
function ValidPassword(password) {
  if (/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*_\-]).{8,}$/.test(password)) {
    return "";
} else {
    return "Password must contain at least 8 characters with an uppercase letter.";
}
  // console.log('spdfdfpd')
  // if(password==="")
  // {
  //   return "Please fill in the fields";
  // }
  // else{
  //   var regex2 = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*_\-]).{8,}$/;
  //   if(regex2.text(password)===false){
  //     return "Password must contain at least 8 characters with an uppercase letter.";
  //   }
  // }
  // return "";
}
function ValidConfirmPassword(confirmPassword, password) {
    console.log("password");
    if (password === confirmPassword){
      return "";
    }
    else{
      return "Password do notmatches";
    }
}
//function isValidAge(age){
//   console.log(age);
//   if(age==="")
//   {
//     return"Please,fill in the fields"
//   }

// }

function validateFormRegistry() {
  const registrationForm = document.getElementById("registrationForm");
  const username = registrationForm.name.value;
  const password = registrationForm.password.value;
  const confirmPassword = registrationForm.confirmPassword.value;
  const email = registrationForm.email.value;
  // const age=registrationForm.dateStart.value;
  let RegistryIsValid = true;
  const confirmPasswordError = ValidConfirmPassword(confirmPassword,password);
  const usernameError = ValidUsername(username);
  const passwordError = ValidPassword(password);
  const emailError = ValidEmail(email);
  //const ageError=isValidAge(age);
  if (usernameError) {
    printError("nameError", usernameError);
    RegistryIsValid = false;
  } else {
    printError("nameError", "");
  }

  if (passwordError) {
    printError("passwordError", passwordError);
    RegistryIsValid = false;
  } else {
    printError("passwordError", "");
  }

  if (emailError) {
    printError("emailError", emailError);
    RegistryIsValid = false;
  } else {
    printError("emailError", "");
  }

  if (confirmPasswordError) {
    printError("confirmPasswordError", confirmPasswordError);
    RegistryIsValid = false;
  } else {
    printError("confirmPasswordError", "");
  }

  // if(ageError){
  //   print("ageError",ageError)
  //   formIsValid=false;
  // }
  // else{
  //   printError("ageError","")
  // }

  if (RegistryIsValid==true) {
    const formData2 = {
      username: username,
      email: email,
      password: password,
      confirmPassword: confirmPassword,
      //  age: age
    };
    console.log(formData2);
    console.log("Form is valid.Sending data...");
  }

  return false;
}
