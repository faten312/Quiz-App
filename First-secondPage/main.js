function preventBack() 
   {
   window.history.forward();

   }
setTimeout("preventBack()", 0);
window.onunload = function () { null };

const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document .getElementById('container');


signUpButton.addEventListener('click',() =>{
    container.classList.add('right-panel-active');
});

signInButton.addEventListener('click' ,() =>{
    container.classList.remove('right-panel-active');
});




window.onload = function () {
    var txtPassword = document.getElementById("password");
    var txtConfirmPassword = document.getElementById("confirm_password");
    txtPassword.onchange = ConfirmPassword;
    txtConfirmPassword.onkeyup = ConfirmPassword;
    function ConfirmPassword() {
        txtConfirmPassword.setCustomValidity("");
        if (txtPassword.value != txtConfirmPassword.value) {
            txtConfirmPassword.setCustomValidity("Passwords do not match.");
        }
    }
}


const signUp = () => {
    let formData = {
      email: document.getElementById("email").value,
      password: document.getElementById("password").value,
    };
    localStorage.setItem("formData", JSON.stringify(formData));
    console.log(localStorage.getItem("formData"));
  };

  let signIn = () => {
    let logindata = {
        emaill: document.getElementById("emaill").value,
        passwordd: document.getElementById("passwordd").value,
    };
    console.log(logindata)
     //localStorage.setItem("loginData", JSON.stringify(loginData));

    if (logindata != JSON.parse(localStorage.getItem("formData"))) {
        alert("invalid email or password")
    }


};


