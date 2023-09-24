
window.addEventListener("DOMContentLoaded", (event) => {

  const loginForm = document.getElementById("login-form");
  const loginButton = document.getElementById("login-form-submit");
  const loginErrorMsg = document.getElementById("login-error-msg");
  loginButton.addEventListener("click", (e) => {
      e.preventDefault();
      const username = loginForm.username.value;
      const password = loginForm.password.value;

       if (username !== "" && password !== "") {
            const formData = {
            username: username,
            password: password,
        };
        console.log(formData);
      }
      else{
    		loginErrorMsg.innerHTML = "Please fill the required fields"
        loginErrorMsg.style.opacity = 1;
      }

    
  })
  
});

