
  function printError(elemId, hintMsg) {
    document.getElementById(elemId).innerHTML = hintMsg;
  } 
function validForm(){
    const loginForm = document.getElementById("login-form");
    const loginButton = document.getElementById("login-form-submit");
    let loginErr = document.getElementById("nameEror");
    let passwordError=document.getElementById("passwordError");
    var nameError=true;
    let username = loginForm.username.value;
    const password = loginForm.password.value;
      function validLogin(username){
        if(username=="")
      {
       printError("nameError","please fill in the fields")
      }
          else{
        var regex=/^[a-zA-Z\s]+$/;
        if(regex.test(username)===false){
          printError("nameError","Please, enter a valid name");
        }else{
          printError("nameError","");
          nameError=false;
          const formData = {
            username: username,
            password: password,
        };
        console.log(formData);
        }
      }
      }
      
        if(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/.test(password)){
          console.log('zaebis');
        }
        else{
          printError("passwordError","at least 8 characters containing a Upper case");
          return false;
        }
      //  if (username !== "" && password !== "") {
      //       const formData = {
      //       username: username,
      //       password: password,
      //   };
      //   console.log(formData);
      // }
  };
  
