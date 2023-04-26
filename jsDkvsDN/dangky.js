// function dangKyTK() {
//     let username = document.getElementById("username").value;
//     localStorage.setItem("username", username);
//     let psw1 = document.getElementById("psw").value;
//     let psw2 = document.getElementById("psw-repeat").value;
//     if (psw1 === psw2) {
//         alert('Bạn đã đăng ký thành công');
//         localStorage.setItem("password", psw1);
//     } else {
//         alert("Mật khẩu nhập lại không trùng khớp");
//     }
// }


function dangKyTK() {

    let username = document.getElementById("username").value;
    let psw1 = document.getElementById("psw").value;
    let psw2 = document.getElementById("psw-repeat").value;
    let users = JSON.parse(localStorage.getItem("users"));
    if ( username ===''|| psw1 === '' || psw2 === '' || psw1 !=psw2) {
        alert("cần nhập đủ thông tin");
    // } else if (!checkUserName(username)) {
    //     alert("Tài khoản dã tồn  tại");
    } else {
        // let newUser = (username,psw1 );
        // users.push(newUser);
        // Đẩy dữ liệu lên localStorage
        localStorage.setItem("username", username);
        localStorage.setItem("password", psw1);
        alert("đăng ký thành công");
        location.href = 'dangnhap.html';
    }
};
// function checkUserName(name) {
//     for (let i = 0; i < users.length; i++) {
//         if (users[i].username === name){
//             return false;
//         }
//     }
//     return true;
// }


// function checkUserName(name) {
//     for (let i = 0; i < users.length; i++) {
//         if (users[i].username === name) {
//             return false;
//         }
//     }
//     return true;
// }
//
// function checkUser(username, psw1) {
//     for (let i = 0; i < users.length; i++) {
//         if (users[i].username === username && users[i].psw1 === password) {
//             return true;
//         }
//     }
//     return false;
// }
//
//
// function login() {
//     users = JSON.parse(localStorage.getItem("users"));
// //     let username = document.getElementById("username").value;
// //     // let password = document.getElementById("password").value;
// //     // if (checkUser(username, password)) {
// //     //     location.href = 'Admin.html';
// //     // } else {
// //     //     alert("Tài khoản không chính xác");
// //     // }
// }