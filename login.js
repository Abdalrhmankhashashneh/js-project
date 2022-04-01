var rege = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/g;

var em = "smsmspy@gmail.com"
var pas = "qweytruio123*"
var ale = document.getElementsByClassName("ale")
function check() {

    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    if (checkemail(email, em) && checkpass(password, pas)) {
        ale[0].innerHTML = "ok "
    }
    else {
        ale[0].innerHTML = "invalid email or password"
    }
    checkpass(password, pas)
}


function checkemail(email, em) {

    if (email.match(rege)) {
        if (email == em) {
            return true
        }
        else {
            return false
        }
    }
    else {
        return false
    }
}
function checkpass(password, pass) {
    var regchar = /\w/
    var regsp = /\d/
    var op = true;

    if (!(password.match(regchar))) {
        ale[1].innerHTML = "you have at least one charcter"
        op = false;
    } else {
        ale[1].innerHTML = ""
    }
    if (!(password.match(regsp))) {
        ale[2].innerHTML = "password must have at least 1 spisal character "
        op = false
    } else {
        ale[2].innerHTML = ""
    }
    if (!(password.length >= 8)) {
        ale[3].innerHTML = "password must have at least 8 character"
        op = false;
    }
    else {
        ale[3].innerHTML = ""
    }
    if (!(password == pass)) {
        op = false;
    }
    return op;
}
