var x1 = JSON.parse(localStorage.getItem("users"))
var card = document.getElementById("card")
var n = document.getElementById("name")
var user = x1.userdata
for (i = 0; i < user.length; i++) {

    card.innerHTML += loaduser(user[i])

}
function loaduser(a) {
    return `
    <div class="card">
    <img src="https://www.w3schools.com/howto/img_avatar.png" alt="Avatar" style="width:50%">
    <div class="container">
        <h4><b id="name"> ${a.name}</b></h4>
        <p class="d"> ${"email : " + a.email}</p>
        <p class="d"> ${"password : " + a.password}</p>
        <p class="d"> ${"result : " + a.result}</p>
        <p class="d"> ${"answers : " + a.answers}</p>
    </div>
</div>
    `
}
function home() {
    var id = localStorage.getItem("user_id")
    if (id) {

        localStorage.removeItem("user_id")
        location.href = "Index.html"

    }
    else {

        location.href = "Index.html"

    }
}