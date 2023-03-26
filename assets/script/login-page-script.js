function checkUser() {
  var userEmailID = document.getElementById("email").value;
  var userPassword = document.getElementById("password").value;
  if (userEmailID.length === 0 || userPassword.length === 0) {
    myFunction();
  }
  if (userEmailID.length > 0 && userPassword.length > 0) {
    if (
      userEmailID === "8093869199" &&
      userPassword === "cohort9"
    ) {
      window.location.href = "./assets/html-pages/user-landing-page.html";
    } else {
      document.getElementById("email-label").style.color = "#BD6367";
      document.getElementById("pwd-label").style.color = "#BD6367";
      document.getElementById("invalid-user-email").style.display =
        "inline-block";
      document.getElementById("invalid-user-pwd").style.display =
        "inline-block";
      document.getElementById("email").value = "";
      document.getElementById("password").value = "";
    }
  }
}
function myFunction() {
  var x = document.getElementById("snackbar");
  x.className = "show";
  setTimeout(function () {
    x.className = x.className.replace("show", "");
  }, 3000);
}
function registerUser(){
    window.location.href = "./assets/html-pages/register-user.html";
}
