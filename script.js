let valMail = document.getElementById("valmail");
let mail = document.getElementById("email");
let mailError = document.getElementById("error");
let checkIcon = document.getElementById("check");
let wrongIcon = document.getElementById("wrong");
let btn = document.getElementById("subbtn");

valMail.addEventListener('submit',e=>{
    e.preventDefault();
});

function val_mail(){
    if(mail.value == ""){
        mailError.innerHTML = "Email is required.";
        mail.style.border = "1px solid red";
        btn.style.border = "1px solid red";
        btn.style.color = "white";
        btn.style.backgroundColor = "red";
        checkIcon.style.display = "none";
        wrongIcon.style.display = "block";
        return false
    }
    else if(!mail.value.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
        mailError.innerHTML = "Email is invalid.";
        mail.style.border = "1px solid red";
        btn.style.border = "1px solid red";
        btn.style.color = "white";
        btn.style.backgroundColor = "red";
        checkIcon.style.display = "none";
        wrongIcon.style.display = "block";
        return false
    }
    else{
        mailError.innerHTML = "";
        mail.style.border = "1px solid green";
        btn.style.border = "1px solid green";
        btn.style.color = "white";
        btn.style.backgroundColor = "green";
        checkIcon.style.display = "block";
        wrongIcon.style.display = "none";
        return true
    }
}
