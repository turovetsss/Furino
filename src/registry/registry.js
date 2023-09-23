window.addEventListener("DOMContentLoaded", (event) => {

  const loginForm = document.getElementById("login-form");
  const loginButton = document.getElementById("login-form-submit");
  const loginErrorMsg = document.getElementById("login-error-msg");
  
  loginButton.addEventListener("click", (e) => {
      e.preventDefault();
      const username = loginForm.username.value;
      const password = loginForm.password.value;
  
      if (password.match(/[a-z]/g) && password.match(/[A-Z]/g) && password.match(/[0-9]/g) && 
                password.match(/[^a-zA-Z\d]/g) && password.length >= 8)
            {
                console.log("Valid Password");
            }
			else
            {
              console.log("Invalid Password");
            }

			document.getElementById("t2").value = result;
      //if (username !== "" && password !== "") {
      //  console.log("логин " + "username")
      //   console.log("пароль " + "password")
      // } 
      // else {
      //     loginErrorMsg.style.opacity = 1;
      // }
 
  })
  
});