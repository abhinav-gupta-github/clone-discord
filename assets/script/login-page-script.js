function checkUser(){
   var userEmailID= document.getElementById("email").value;
   var userPassword = document.getElementById("password").value;
   if(userEmailID.length === 0 || userPassword.length === 0)
   {
    window.alert("Please enter mandatory fields");
   }
   if(userEmailID.length >0 && userPassword.length>0)
   {
    if(userEmailID ==='abhi.mechkiit@gmail.com' && userPassword==='cohort9')
    {
        window.location.href="./user-landing-page.html";
    }  
    else{
        document.getElementById("email-label").style.color="#BD6367";
        document.getElementById("pwd-label").style.color="#BD6367";
        document.getElementById("invalid-user-email").style.display = "inline-block";
        document.getElementById("invalid-user-pwd").style.display = "inline-block";
        document.getElementById("email").value = "";
        document.getElementById("password").value = "";
    }  
   }
}