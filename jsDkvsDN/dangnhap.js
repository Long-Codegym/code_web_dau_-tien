
let userNameDK = localStorage.getItem("username");
let passwordDK = localStorage.getItem("password");
// userNameDK = JSON.parse(userNameDK);
// passwordDK = JSON.parse(passwordDK);
typeof passwordDK;

function dangNhap() {
    let userNameDN = document.getElementById("nameDN").value;
    console.log(userNameDN)
    let passwordDn = document.getElementById("passwordDN").value;
    if (userNameDN==userNameDK){
        if (passwordDn==passwordDK){
            window.location.href = "Case_web_ban_xe.html";
        }else {
            alert("Tài khoản hoặc mật khẩu không chính xác");
        }
    }else {
        alert("Tài khoản hoặc mật khẩu không chính xác")
    }
}
