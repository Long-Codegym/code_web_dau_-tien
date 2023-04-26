function dangKyTK() {
    let usernameDK = document.getElementById("username").value;
    let psw1 = document.getElementById("psw").value;
    let psw2 = document.getElementById("psw-repeat").value;
    let users1 = JSON.parse(localStorage.getItem("users"));
    if (users1== null) {
        users1 = []
    }
    let newuser1=[];
    if (usernameDK === '' || psw1 === '' || psw2 === '' || psw1 != psw2) {
        alert("cần nhập đủ thông tin");
    // còn phần check điều kiện 2 tk ko đc giống nhau khi tạo
    // } else if (!checkUserName(username)) {
    //     alert("Tài khoản dã tồn  tại");
    } else {
        let newUser = [usernameDK, psw1];
        users1.push(newUser);
        newuser1.push(newUser);
        localStorage.setItem("users", JSON.stringify(users1));
        alert("đăng ký thành công");
        window.location.href = 'dangnhap.html';
    }
};

// function checkUserName(usernameDK) {
//     for (let i = 0; i < newuser1.length; i++) {
//         if (newuser1[i][0] == usernameDK {
//             return false;
//         }
//     }
//     return true;
// };


