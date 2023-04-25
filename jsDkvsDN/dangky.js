function dangKyTK() {
    let username = document.getElementById("username").value;
    localStorage.setItem("username", username);
    let psw1 = document.getElementById("psw").value;
    let psw2 = document.getElementById("psw-repeat").value;
    if (psw1 === psw2) {
        alert('Bạn đã đăng ký thành công');
        localStorage.setItem("password", psw1);
    } else {
        alert("Mật khẩu nhập lại không trùng khớp");
    }
}
