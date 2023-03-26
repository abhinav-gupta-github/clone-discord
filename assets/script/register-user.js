function registerUser() {
  var userEmailID = document.getElementById("email").value;
  var userPassword = document.getElementById("password").value;
  if (userEmailID.length === 0 || userPassword.length === 0) {
    openSnackbar();
  } else {
    var objUser = userLoginDetails;
    newObj = {
        email:userEmailID,
        password:userPassword,
    };
objUser.push(newObj);
console.log(userLoginDetails);
  }
}
function openSnackbar() {
  var x = document.getElementById("snackbar");
  x.className = "show";
  setTimeout(function () {
    x.className = x.className.replace("show", "");
  }, 3000);
}
function userRegistered() {
  var x = document.getElementById("user-registered");
  x.className = "show";
  setTimeout(function () {
    x.className = x.className.replace("show", "");
  }, 3000);
}
const userLoginDetails = [
  {
    email: "abhi.mechkiit@gmail.com",
    password: "cohort9",
  },
];

function export2txtsample() {
    const originalData = {
      members: [{
          name: "cliff",
          age: "34"
        },
        {
          name: "ted",
          age: "42"
        },
        {
          name: "bob",
          age: "12"
        }
      ]
    };
  
    const a = document.createElement("a");
    a.href = URL.createObjectURL(new Blob([JSON.stringify(originalData, null, 2)], {
      type: "text/plain"
    }));
    a.setAttribute("download", "data.txt");
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  }
  function returnLogin(){
    window.location.href = "../..";
  }
