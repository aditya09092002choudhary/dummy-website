const fName = document.getElementById("fname");
const lName = document.getElementById("lname");
const username = document.getElementById("username");
const password = document.getElementById("password");
const form = document.getElementsByTagName('form');
const fnameErr = document.querySelector(".fName-err");
const usernameErr = document.querySelector(".username-err");
const passwordErr = document.querySelector(".password-err");
const inp = document.querySelectorAll(".err");

function ValidateEmail() 
{
 if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(username.value))
  {
    return (true)
  }
    console.log("You have entered an invalid email address!")
    return (false)
}

function handleClick() {
    if(fnameErr.value!==""||usernameErr.value!==""||passwordErr.value!==""){
        for(var i = 0;i<inp.length;i++){
            inp[i].innerHTML = "";
        }
    }
}

function validate(e){
    const checkEmail = ValidateEmail() ;
    console.log(checkEmail);
    if(fName.value.trim().length<3||checkEmail===false||password.value.trim().length<8){
        e.preventDefault();
        if(fName.value.trim().length<3){
            fnameErr.innerHTML="First name is invalid";
        }
        if(checkEmail===false){
            usernameErr.innerHTML ="Invalid Email, try again!";
        }
        if(password.value.trim().length<8){
            passwordErr.innerHTML = "Password length must be atleast 8, try again !"
        } 
    } else {
        window.location = "../index.html";
    }
}


