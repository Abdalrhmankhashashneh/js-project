
var id = localStorage.getItem("user_id")
var x1 = JSON.parse(localStorage.getItem("users"))
var x2 = JSON.parse(localStorage.getItem("question"))
var a = x1.userdata[id];
var a2 = x2.q;
var result = a.result;
let f = document.getElementById("fail");
let p = document.getElementById("pass");
let btn = document.getElementById("ans_btn");
let ans = document.getElementById("ans_table");
document.getElementById("result").innerHTML = " Result <br><br>" + "<span>" + result + " out of  20 " + "</span>"
if (result >= 10) {
    p.style.display = "inline";
}

else {
    f.style.display = "inline";
}


/***************************************************************** */
var op = true;
btn.onclick = function showAnswers() {
    if (op) {
        for (i = 0; i < a.answers.length; i++) {
            var c = a2[i];
            var c2 = a.answers;
            ans.innerHTML += " <tr> " + " <td> " + c.question + " </td> " + " <td> " + c2[i] + " </td> " + " <td> " + c.correct + " </td> " + " </tr> "
        }
        ans.style.display = "table";
        op = false
    }
}

function home() {
    var id = localStorage.getItem("user_id")
    if (id) {
        localStorage.removeItem("user_id")
        location.href = "login.html"
    }
    else {
        location.href = "../Index.html"
    }
}

