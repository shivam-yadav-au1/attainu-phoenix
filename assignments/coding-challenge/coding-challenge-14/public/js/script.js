

/*
    Login Page
    Author : Shivam
    Date  : 5/03/19
*/


/*
    method giveValue() takes input from two textbox and return value object
*/
const giveValue = () => {

    let userName = document.getElementById("name").value;
    let password = document.getElementById("password").value;

    let values = {
        userName: userName,
        password: password
    }
    return values;
}
/* 
    validate() takes argument username and password and validate whether it is null or not 
*/
const validate = (userName, password, fun) => {

    var message = ''

    if (userName == "" || password == "") {
        return false;
    }
    var data = {
        name: userName,
        password: password
    }

    var request = new XMLHttpRequest();
    request.open("post", "/login");
    request.setRequestHeader("content-type", "application/json");
    request.send(JSON.stringify(data))
    request.onreadystatechange = function () {
        if (request.readyState == 4 && request.status == 200) {
            message = request.responseText
            console.log("Response From server :" + message)
            fun(message)
        }
    }


}
/* 
  login() checks whether username and password is valid or not 
  If username = "shivam" and password ="password" 
  then it display login successfull message 
  of display login failed message
  
*/

var validateCallback = function (message) {

    if (message == "Success") {
        displayMessage("success")

    } else if (message == "Failed") {
        displayMessage("error")

    }

}

const login = () => {
    event.preventDefault();

    let userName = giveValue().userName;
    let password = giveValue().password;

    validate(userName, password,validateCallback)

}
/*
  displayMessage() takes message as argument and  style it and display it on screen
*/
const displayMessage = (message) => {
    if (message === "success" || message === "") {

        let error = document.getElementById("error");
        if (window.getComputedStyle(error).display === "block") {
            error.style.display = "none";
        }
        document.getElementById("success").style.display = "block"
    }
    if (message === "error" || message === "") {

        let success = document.getElementById("success");
        if (window.getComputedStyle(success).display === "block") {
            success.style.display = "none";
        }
        document.getElementById("error").style.display = "block"
    }


}
/*
Handle login button click it executed login function 
*/
document.getElementById("loginButton").addEventListener("click", login);