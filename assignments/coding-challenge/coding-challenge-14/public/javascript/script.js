'use strict'

var CONTACTS = []

var updateContent = function () {
    var tbody = document.getElementById("tbody")

    tbody.innerHTML = ""

    for (var i = 0; i < CONTACTS.length; i++) {
        var tr = document.createElement("tr")
        var name = document.createElement("td")
        var phoneNumber = document.createElement("td")

        name.innerText = CONTACTS[i].name
        phoneNumber.innerText = CONTACTS[i].phoneNumber

        tr.appendChild(name)
        tr.appendChild(phoneNumber)

        tbody.appendChild(tr)

    }
}

var loadContent = function () {
    var request = new XMLHttpRequest()
    request.open("get", "/contacts")
    request.send();
    request.onreadystatechange = function () {
        if (request.readyState == 4 && request.status == 200) {
            CONTACTS = JSON.parse(request.responseText)
            updateContent()
        }
    }
}

var button = document.getElementById("btnSubmit")
button.addEventListener("click",function(){
    var name = document.getElementById("name").value;
    var phoneNumber = document.getElementById("phoneNumber").value;

    if(name == '' || phoneNumber == ''){
        alert("Please Enter Name and PhoneNumber")
        return
    }

    var data = {
        name:name,
        phoneNumber:phoneNumber
    }

    var request = new XMLHttpRequest()
    request.open("post","/contacts")
    request.setRequestHeader("content-type","application/json")
    request.send(JSON.stringify(data))

    request.onreadystatechange = function(){
        if(request.readyState == 4 && request.status == 200){
            CONTACTS.push(data)
            updateContent()
        }
    }
})